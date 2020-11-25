import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";
import { FilterParameters } from '../model/filter-parameters';
import { PendingAccession } from '../model/accession';
import { PendingAccessionService } from './pending-accession-service';

export class PendingAccessionDataSource implements DataSource<PendingAccession> {

  private dataSubject = new BehaviorSubject<Array<PendingAccession>>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public total = this.totalSubject.asObservable();
  public loading = this.loadingSubject.asObservable();
  public currentAccession: PendingAccession;

  constructor(private service: PendingAccessionService) { }

  loadAccessions(params: FilterParameters) {

    this.loadingSubject.next(true);

    this.service.loadPendingAccessions(params)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(res => {
        if (res.total > 0) {
          this.currentAccession = res.data[0];
        }
        this.dataSubject.next(res.data);
        this.totalSubject.next(res.total);
      })
  }

  connect(collectionViewer: CollectionViewer): Observable<Array<PendingAccession>> {
    return this.dataSubject.asObservable()

  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }
}
