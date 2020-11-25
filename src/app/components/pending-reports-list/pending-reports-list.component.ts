import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { environment } from '../../../environments/environment';
import { Sorting } from '../../model/filter-parameters';
import { Router } from '@angular/router';
import { PendingReportService } from 'src/app/services/pending-reports-service';
import { PendingReportDataSource } from 'src/app/services/pending-reports-data-source';
import { PatientReportRecord } from 'src/app/model/report';

@Component({
	selector: 'app-pending-reports-list',
	templateUrl: './pending-reports-list.component.html',
	styleUrls: [ './pending-reports-list.component.css' ]
})
export class PendingReportsListComponent implements OnInit, AfterViewInit {
	@Output() paginatorEvent = new EventEmitter();
	@Output() sortEvent = new EventEmitter();
	@ViewChild(MatSort, { static: true })
	sort: MatSort;
	@ViewChild(MatPaginator, { static: false })
	paginator: MatPaginator;

	public header: string;
	public resources = environment.resources;
	public dataSource: PendingReportDataSource;
	public total: number;
	public pageSize: number = 10;
	public pageIndex: number = 0;
	public filter: string;
	public sorting: Sorting;
	public noDataMessage: string;

	// columns that are actualy displayed
	public displayedColumns: Array<string> = [];

	constructor(private service: PendingReportService, private router: Router) {}

	ngOnInit() {
		this.initalizeComponent();
		this.displayedColumns = [ 'sampleNumber', 'creationDate', 'pName', 'status', 'accessionNumber', 'cls', 'info' ];
		this.header = this.resources.pendingReports;
	}

	async initalizeComponent() {
		this.dataSource = new PendingReportDataSource(this.service);
		this.dataSource.loadReports({ filter: '', pageIndex: 0, pageSize: this.pageSize });
		this.dataSource.total.subscribe((total) => {
			this.total = total;
		});
	}

	ngAfterViewInit(): void {
		this.paginator.page.subscribe((event) => {
			this.pageSize = event.pageSize;
			this.pageIndex = event.pageIndex;
			this.dataSource.loadReports({
				filter: this.filter,
				pageIndex: this.pageIndex,
				pageSize: this.pageSize,
				sorting: this.sorting
			});
		});
		this.sort.sortChange.subscribe((event) => {
			this.sorting = event;
			this.dataSource.loadReports({
				filter: this.filter,
				pageIndex: this.pageIndex,
				pageSize: this.pageSize,
				sorting: this.sorting
			});
		});
	}

	applyFilter(event) {
		let filterText = (event.target as HTMLInputElement).value;
		this.noDataMessage = `${this.resources.noDataMachingFilter} ${filterText}`;
		this.filter = filterText.trim().toLowerCase();
		this.dataSource.loadReports({
			filter: this.filter,
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
			sorting: this.sorting
		});
	}

	showInfo(element: { id: any }) {
		this.router.navigate([ '/patient-report', element.id ]);
	}
}
