import {Module} from '@nestjs/common';
import {FootballScoreController} from './football-score.controller';
import {FootballScoreService} from './football-score.service';

@Module({
    controllers: [FootballScoreController],
    providers: [FootballScoreService]
})
export class FootballScoreModule {
}
