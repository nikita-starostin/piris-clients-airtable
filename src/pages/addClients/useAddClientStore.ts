import {AddClientStore} from './AddClientStore'

let addClientStore: AddClientStore | undefined;

export function useAddClientStore(): AddClientStore {
    if (!addClientStore) {
        addClientStore = new AddClientStore();
    }

    return addClientStore;
} 
