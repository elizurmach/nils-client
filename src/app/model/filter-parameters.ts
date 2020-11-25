export interface FilterParameters {
  filter: string,
  pageIndex: number,
  pageSize: number,
  sorting?: Sorting
}

export interface Sorting {
  colName: string,
  direction: 'Assending' | 'Desending'
}

export interface FiltredResults<T> {
  total: number,
  data: Array<T>
}
