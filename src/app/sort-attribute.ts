import { PlayerDetails } from './player-details';

export interface SortAttributes {
    sort(a: PlayerDetails, b: PlayerDetails): number;
    getName(): string;
}

export var TotalPoints = <SortAttributes>{
    sort(a, b): number {
        return b.totalPoints - a.totalPoints;
    },
    getName(): string {
        return "Total Points";
    }
};

export var TotalPointsEvent = <SortAttributes>{
    sort(a, b): number {
        return b.eventPoints - a.eventPoints;
    },
    getName(): string {
        return "Points In Gameweek";
    }
};

export var Cost = <SortAttributes>{
    sort(a, b): number {
        return b.nowCost - a.nowCost;
    },
    getName(): string {
        return "Cost";
    }
};

export var SelectedBy = <SortAttributes>{
    sort(a, b): number {
        if (b.selectedByPercent && a.selectedByPercent)
            return parseInt(b.selectedByPercent) - parseInt(a.selectedByPercent);
        return -100;
    },
    getName(): string {
        return "Selected By";
    }
};

export var CostChange = <SortAttributes>{
    sort(a, b): number {
        return b.costChangeStart - a.costChangeStart;
    },
    getName(): string {
        return "Cost Change";
    }
};

export var CostChangeEvent = <SortAttributes>{
    sort(a, b): number {
        return b.costChangeEvent - a.costChangeEvent;
    },
    getName(): string {
        return "Cost Change Gameweek";
    }
};

export var TransfersIn = <SortAttributes>{
    sort(a, b): number {
        return b.transfersInEvent - a.transfersInEvent;
    },
    getName(): string {
        return "Transfers In Gameweek";
    }
};

export var PPG = <SortAttributes>{
    sort(a, b): number {
        if (b.pointsPerGame && a.pointsPerGame)
            return parseInt(b.pointsPerGame) - parseInt(a.pointsPerGame);
        return -100;
    },
    getName(): string {
        return "Points per game";
    }
};