import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import ActionsContainer from '../components/ActionsContainer';
import {useAppRouting} from '../useAppRouting';
import {useAirTable} from '../utils/useAirTable';
import {NAME_LABEL, PATRONYMIC_LABEL, SURNAME_LABEL} from './addClients/addClients.constants';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Clients(): React.ReactElement {
    const [clients, setClients] = useState<any[]>([]);
    const {table} = useAirTable();
    const {toAddClients} = useAppRouting();
    useEffect(() => {
        table.select().firstPage().then(clients => {
            console.log(clients)
            setClients(clients);
        });
    }, [table])

    const classes = useStyles();

    return <>
        <ActionsContainer>
            <Button color='primary'
                    variant='contained'
                    onClick={toAddClients}>Add</Button>
        </ActionsContainer>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>{NAME_LABEL}</TableCell>
                        <TableCell>{SURNAME_LABEL}</TableCell>
                        <TableCell>{PATRONYMIC_LABEL}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(it => (
                        <TableRow key={it.id}>
                            <TableCell>{it.fields.name}</TableCell>
                            <TableCell>{it.fields.lastName}</TableCell>
                            <TableCell>{it.fields.patronymic}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}
