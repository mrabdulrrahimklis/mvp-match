export interface IResponse<T> {
    code: string,
    data: T[],
    error: unknown
}