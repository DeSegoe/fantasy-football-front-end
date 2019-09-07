import { Pipe, PipeTransform } from '@angular/core';
import { PlayerDetails } from './player-details';

@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(value: PlayerDetails[], arg: string): PlayerDetails[] {
    if (!arg || arg.length<3)
      return value;
    
    arg = arg.toLowerCase();
    let customFilter = (player: PlayerDetails) => {
      let position = 'Goalkeeper';
      switch (player.elementType) {
        case 2: position = 'Defender'; break;
        case 3: position = 'Midfielder'; break;
        case 4: position = 'Attacker'; break;
      }

      return `${player.firstName} ${player.secondName} ${player.teamSummary.name} ${position}`.toLowerCase().indexOf(arg) > 0;
    };

    return value.filter(customFilter);
  }
}
