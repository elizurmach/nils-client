import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";
import { FilterParameters } from '../model/filter-parameters';
import { Accession } from '../model/accession';
import { AccessionService } from './accession-service';

export class PendingAccessionDataSource implements DataSource<Accession> {

  private dataSubject = new BehaviorSubject<Array<Accession>>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public total = this.totalSubject.asObservable();
  public loading = this.loadingSubject.asObservable();

  constructor(private service: AccessionService) { }

  loadAccession(params: FilterParameters) {

    this.loadingSubject.next(true);

    this.service.loadAccessions(params)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(res => {
        this.dataSubject.next(res.data);
        this.totalSubject.next(res.total);
      })
  }

  connect(collectionViewer: CollectionViewer): Observable<Array<Accession>> {
    return this.dataSubject.asObservable()

  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }
}
