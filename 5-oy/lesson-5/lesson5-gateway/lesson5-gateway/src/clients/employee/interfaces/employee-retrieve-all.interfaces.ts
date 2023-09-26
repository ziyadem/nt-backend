export declare interface EmployeeRetrieveAllRequest {
    pageOffset?: number
    pageLimit?: number
}

export declare interface EmployeeRetrieveAllResponse {
    id: string
    name: string
    jobs: EmployeeRetrieveAllJobResponse[]
}

export declare interface EmployeeRetrieveAllJobResponse {
    id: string
    title: string
}
