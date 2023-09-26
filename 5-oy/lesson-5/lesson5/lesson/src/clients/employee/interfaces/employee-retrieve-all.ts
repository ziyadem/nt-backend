export declare interface EmployeeRetrieveAllRequest{
    pageOffset?:number
    pageLimit?:number
}

export declare interface EmployeeRetrieveAllRespons {
  id: string
  name: string
  jobs: EmployeeRetrieveAllJobsRespons[]

}

export declare interface EmployeeRetrieveAllJobsRespons {
    id:string
    title:string
}
