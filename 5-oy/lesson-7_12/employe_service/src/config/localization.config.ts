import { registerAs } from "@nestjs/config";

declare interface LocalizationServiceOptions{
    url?:string
    timeout?:number
}

export const localizationConfig=registerAs<LocalizationServiceOptions>('localization',()=>({
    url:process.env.LOCALIZATION_SERVICE_URL,
    timeout:process.env.LOCALIZATION_SERVICE_TIMEOUT ? parseInt(process.env.LOCALIZATION_SERVICE_TIMEOUT) : undefined

}))