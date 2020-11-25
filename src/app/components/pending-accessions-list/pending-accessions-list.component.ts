import { Component, OnInit, AfterViewInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort } from '@angular/material';
import { PendingAccessionDataSource } from '../../services/pending-accessions-data-source';
import { Sorting } from '../../model/filter-parameters';
import { PendingAccessionService } from '../../services/pending-accession-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-accessions-list',
  templateUrl: './pending-accessions-list.component.html',
  styleUrls: ['./pending-accessions-list.component.css']
})
export class PendingAccessionsListComponent implements OnInit, AfterViewInit {

  @Output() paginatorEvent = new EventEmitter();
  @Output() sortEvent = new EventEmitter();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public header: string;
  public resources = environment.resources;
  public dataSource: PendingAccessionDataSource;
  public total: number;
  public pageSize: number = 10;
  public pageIndex: number = 0;
  public filter: string;
  public sorting: Sorting;
  public noDataMessage: string;

  // columns that are actualy displayed
  public displayedColumns: Array<string> = [];

  constructor(private service: PendingAccessionService, private router: Router) { }

  ngOnInit() {
    this.initalizeComponent();
    this.displayedColumns = ['sampleNumber', 'creationDate','pName', 'status', 'accessionNumber',  'accessioner', 'info'];
    this.header = this.resources.pendingAccessions;
  }

  async initalizeComponent() {
    this.dataSource = new PendingAccessionDataSource(this.service);
    this.dataSource.loadAccessions({ filter: '', pageIndex: 0, pageSize: this.pageSize })
    this.dataSource.total.subscribe(total => {
      this.total = total;
    })
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((event) => {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.dataSource.loadAccessions({ filter: this.filter, pageIndex: this.pageIndex, pageSize: this.pageSize, sorting: this.sorting });
    });
    this.sort.sortChange.subscribe((event) => {
      this.sorting = event;
      this.dataSource.loadAccessions({ filter: this.filter, pageIndex: this.pageIndex, pageSize: this.pageSize, sorting: this.sorting });
    });
  }

  applyFilter(event) {
    let filterText = (event.target as HTMLInputElement).value;
    this.noDataMessage = `${this.resources.noDataMachingFilter} ${filterText}`;
    this.filter = filterText.trim().toLowerCase();
    this.dataSource.loadAccessions({ filter: this.filter, pageIndex: this.pageIndex, pageSize: this.pageSize, sorting: this.sorting });
  }

  showInfo(element) {
    console.log(element.pName);
    this.router.navigate(['/requisition-form', element.id]);
  }
}
