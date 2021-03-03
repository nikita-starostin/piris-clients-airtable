import {History} from 'history';
import {useHistory} from 'react-router-dom';
import {getClientsAddUrl, getClientsUrl} from './AppRoutes';

class AppRouting {
    constructor(private history: History) {
        this.toAddClients = this.toAddClients.bind(this);
        this.toClients = this.toClients.bind(this);
    }

    toClients() {
        this.history.push(getClientsUrl());
    }

    toAddClients() {
        this.history.push(getClientsAddUrl());
    }
}

let appRouting: AppRouting;

export function useAppRouting() {
    const history = useHistory();
    if(!appRouting) {
        appRouting = new AppRouting(history);
    }

    return appRouting;
}
