import Airtable from 'airtable';

const AIRTABLE_BASE = 'appQefmpGydj1FQW1';
const AIRTABLE_API_KEY = 'keyvgFmx5rjWR8GIr';
const AIRTABLE_TABLE_NAME = 'clients';

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE);

const table = base(AIRTABLE_TABLE_NAME);

export function useAirTable() {
    return {base, table};
}
