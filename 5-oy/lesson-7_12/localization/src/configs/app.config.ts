declare interface AppCOnfigOptions{
    host?:string
    port?:number
}

export const appConfig: AppCOnfigOptions = {
  host: process.env.APP_HOST ?? '127.0.0.1',
  port: process.env.APP_PORT ? parseInt(process.env.App_PORT, 10) : 4001,
};