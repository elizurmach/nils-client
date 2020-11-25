import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";
import { FilterParameters } from '../model/filter-parameters';
import { PendingPatientReport } from '../model/report';
import { PendingReportService } from './pending-reports-service';

export class PendingReportDataSource implements DataSource<PendingPatientReport> {

  private dataSubject = new BehaviorSubject<Array<PendingPatientReport>>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public total = this.totalSubject.asObservable();
  public loading = this.loadingSubject.asObservable();
  public currentReport: PendingPatientReport;

  constructor(private service: PendingReportService) { }

  loadReports(params: FilterParameters) {

    this.loadingSubject.next(true);

    this.service.loadPendingReports(params)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(res => {
        if (res.total > 0) {
          this.currentReport = res.data[0];
        }
        this.dataSubject.next(res.data);
        this.totalSubject.next(res.total);
      })
  }

  connect(collectionViewer: CollectionViewer): Observable<Array<PendingPatientReport>> {
    return this.dataSubject.asObservable()

  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }
}
