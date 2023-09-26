import { Global, Module } from "@nestjs/common";
import { LocalixationService } from './localization.service';

@Global()
@Module({
    exports:[LocalixationService],
    providers:[LocalixationService]
})
export class LocalizationModule {}