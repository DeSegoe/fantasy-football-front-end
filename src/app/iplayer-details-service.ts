import { Observable } from 'rxjs';
import { PlayerDetails } from './player-details';

export interface IPlayerDetailsService {
    getPlayers(): Observable<PlayerDetails[]>
}
