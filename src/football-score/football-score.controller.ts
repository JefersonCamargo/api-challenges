import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {FootballTeamDataDto} from "./dto/football-team-data.dto";
import {FootballScoreService} from "./football-score.service";

@Controller('football-score')
export class FootballScoreController {

    constructor(private footballScoreService: FootballScoreService) {
    }

    @Get()
    test(@Param('') id) {
        return 'It is alive...'
    }

    @Post()
    calculateScore(@Body() teamsScore: FootballTeamDataDto) {
        return this.footballScoreService.calculateScore(teamsScore)
    }

}
