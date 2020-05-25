import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BasketballPlayer } from './player.model';

export class BasketballPlayerData implements InMemoryDbService{
    createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
        let players: BasketballPlayer[] = [
            {id:1, firstName: 'Lebron', lastName:'james', description: 'Best basketball player'},
            {id:2, firstName: 'Kylie', lastName:'Erwing', description: 'Second Best basketball player'},
            {id:3, firstName: 'Wayne', lastName:'Jackson', description: 'Third Best basketball player'},
            
        ];
    }

}