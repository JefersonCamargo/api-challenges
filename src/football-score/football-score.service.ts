import {Injectable} from '@nestjs/common';
import {FootballTeamDataDto} from "./dto/football-team-data.dto";

@Injectable()
export class FootballScoreService {

    calculateScore(teamsScore: FootballTeamDataDto) {
        let result = []
        console.log('######################################')
        for (let i = 0; i < teamsScore.teamB.length; i++) {
            let totalGames = 0;
            for (let j = 0; j < teamsScore.teamA.length; j++) {
                console.log(`IndexTeamA ${j} IndexTeamB ${i},  ${teamsScore.teamA[j]} <= ${teamsScore.teamB[i]} = ${teamsScore.teamA[j] <= teamsScore.teamB[i]}`)
                if (teamsScore.teamA[j] <= teamsScore.teamB[i]) {
                    totalGames++;
                }
            }
            result.push(totalGames);
            console.log('totalGames: ', totalGames)
            console.log('######################################')
        }

        return {'totalGames': result}
    }

}
