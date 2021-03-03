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
import {
    ADDRESS_LABEL,
    CITIZENSHIP_LABEL,
    CITY_LABEL,
    CITY_REGISTRATION_LABEL,
    DATE_OF_BIRTH_LABEL,
    DISABILITY_LABEL,
    EMAIL_LABEL,
    JOB_LABEL,
    JOB_POSITION_LABEL,
    MARITAL_STATUS_LABEL,
    MONTHLY_MONEY_PROFILE_LABEL,
    NAME_LABEL,
    PASSPORT_CREATED_AT_LABEL,
    PASSPORT_IDENTITY_LABEL,
    PASSPORT_LOCATION_LABEL,
    PASSPORT_NUMBER_LABEL,
    PASSPORT_SERIA_LABEL,
    PATRONYMIC_LABEL,
    PENSIONER_LABEL,
    PHONE_HOME_LABEL,
    PHONE_MOBILE_LABEL,
    SURNAME_LABEL
} from './addClients/addClients.constants';
import {useAddClientStore} from './addClients/useAddClientStore';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Clients(): React.ReactElement {
    const [clients, setClients] = useState<any[]>([]);
    const {table} = useAirTable();
    const {resetToDefaults} = useAddClientStore();
    const {toAddClients} = useAppRouting();
    useEffect(() => {
        table.select().firstPage().then(clients => {
            setClients(clients);
        });
    }, [table])

    const classes = useStyles();

    return <>
        <ActionsContainer>
            <Button color='primary'
                    variant='contained'
                    onClick={() => {
                        resetToDefaults();
                        toAddClients();
                    }}>Add</Button>
        </ActionsContainer>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>{NAME_LABEL}</TableCell>
                        <TableCell>{SURNAME_LABEL}</TableCell>
                        <TableCell>{PATRONYMIC_LABEL}</TableCell>
                        <TableCell>{DATE_OF_BIRTH_LABEL}</TableCell>
                        <TableCell>{PASSPORT_SERIA_LABEL}</TableCell>
                        <TableCell>{PASSPORT_NUMBER_LABEL}</TableCell>
                        <TableCell>{PASSPORT_CREATED_AT_LABEL}</TableCell>
                        <TableCell>{PASSPORT_IDENTITY_LABEL}</TableCell>
                        <TableCell>{PASSPORT_LOCATION_LABEL}</TableCell>
                        <TableCell>{CITY_LABEL}</TableCell>
                        <TableCell>{ADDRESS_LABEL}</TableCell>
                        <TableCell>{PHONE_HOME_LABEL}</TableCell>
                        <TableCell>{PHONE_MOBILE_LABEL}</TableCell>
                        <TableCell>{EMAIL_LABEL}</TableCell>
                        <TableCell>{JOB_LABEL}</TableCell>
                        <TableCell>{JOB_POSITION_LABEL}</TableCell>
                        <TableCell>{CITY_REGISTRATION_LABEL}</TableCell>
                        <TableCell>{MARITAL_STATUS_LABEL}</TableCell>
                        <TableCell>{CITIZENSHIP_LABEL}</TableCell>
                        <TableCell>{DISABILITY_LABEL}</TableCell>
                        <TableCell>{PENSIONER_LABEL}</TableCell>
                        <TableCell>{MONTHLY_MONEY_PROFILE_LABEL}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(it => (
                        <TableRow key={it.id}>
                            <TableCell>{it.fields.name}</TableCell>
                            <TableCell>{it.fields.surname}</TableCell>
                            <TableCell>{it.fields.patronymic}</TableCell>
                            <TableCell>{it.fields.dateOfBirth}</TableCell>
                            <TableCell>{it.fields.passportSeria}</TableCell>
                            <TableCell>{it.fields.passportNumber}</TableCell>
                            <TableCell>{it.fields.passportCreatedAt}</TableCell>
                            <TableCell>{it.fields.passportIdentity}</TableCell>
                            <TableCell>{it.fields.passportLocation}</TableCell>
                            <TableCell>{it.fields.city}</TableCell>
                            <TableCell>{it.fields.address}</TableCell>
                            <TableCell>{it.fields.phoneHome}</TableCell>
                            <TableCell>{it.fields.phoneMobile}</TableCell>
                            <TableCell>{it.fields.email}</TableCell>
                            <TableCell>{it.fields.job}</TableCell>
                            <TableCell>{it.fields.jobPosition}</TableCell>
                            <TableCell>{it.fields.cityRegistration}</TableCell>
                            <TableCell>{it.fields.maritalStatus}</TableCell>
                            <TableCell>{it.fields.citizenship}</TableCell>
                            <TableCell>{it.fields.disability}</TableCell>
                            <TableCell>{it.fields.pensioner ? 'Да' : 'Нет'}</TableCell>
                            <TableCell>{it.fields.monthlyMoneyProfile}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}
