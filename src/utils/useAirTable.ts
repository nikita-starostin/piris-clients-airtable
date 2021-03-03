import Airtable from 'airtable';

const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE as string;
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME as string;

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE);

const table = base(AIRTABLE_TABLE_NAME);

export function useAirTable() {
    return {base, table};
}
