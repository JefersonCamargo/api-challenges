import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {InventoryModule} from './inventory/inventory.module';
import {FootballScoreModule} from './football-score/football-score.module';


@Module({
    imports: [InventoryModule, FootballScoreModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
