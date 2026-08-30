/** Common API response envelopes — matches bluebell-backend's crudFactory output. */

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  meta: IPaginationMeta;
}

export interface ISingleResponse<T> {
  data: T;
}
