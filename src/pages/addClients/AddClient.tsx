import DateFnsUtils from '@date-io/date-fns';
import {Box, Button, FormControl, Input, InputLabel} from '@material-ui/core';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ActionsContainer from '../../components/ActionsContainer';
import {useAppRouting} from '../../useAppRouting';
import {useAirTable} from '../../utils/useAirTable';
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
} from './addClients.constants';
import {useAddClientStore} from './useAddClientStore';

function BaseInput({value, setValue, label, type, inputStyle, ...props}: { value: any, setValue: (newValue: any) => void, label: string, type?: string, inputStyle?: React.CSSProperties, onFocus?: () => void, onBlur?: () => void, onClick?: () => void }) {
    return <FormControl>
        <InputLabel>{label}</InputLabel>
        <Input {...props}
               value={value}
               style={{
                   ...inputStyle || {},
                   marginRight: '1em',
               }}
               endAdornment={type !== 'checkbox' ? <button onClick={() => {
                   console.log('clicked');
                   setValue(undefined);
               }}>X</button> : undefined}
               type={type}
               onChange={(event => setValue(event.target.value))}/>
    </FormControl>
}

function TextInput(props: { value: string, setValue: (newValue: string) => void, label: string, onFocus?: () => void, onBlur?: () => void; onClick?: () => void }) {
    return <BaseInput type='text' {...props} />
}

function DateInput({value, setValue, label}: { value?: Date | null, setValue: (newValue: Date | null) => void, label: string, type?: string }) {
    const [open, setOpen] = useState(false);
    return <DatePicker selected={value}
                       onFocus={() => setOpen(true)}
                       onClickOutside={() => setOpen(false)}
                       open={open}
                       customInput={<TextInput value={(value && value.toString()) || ''}
                                               label={label}
                                               setValue={(newValue) => {
                                                   newValue == null && setValue(null);
                                                   console.log(newValue);
                                               }}

                       />}
                       onChange={(newValue: any) => {
                           setValue(newValue);
                           setOpen(false);
                       }}/>;
}

function BoolInput({value, setValue, ...props}: { value: boolean, setValue: (newValue: boolean) => void, label: string, type?: string }) {
    return <BaseInput {...props}
                      value={value.toString()}
                      setValue={(newValue: string) => {
                          console.log(newValue);
                          setValue(!!newValue)
                      }}
                      inputStyle={{
                          width: '19px',
                      }}
                      type='checkbox'/>
}

export default observer(function AddClient() {
    const {toClients} = useAppRouting();
    const {
        name,
        setName,
        surname,
        setSurname,
        patronymic,
        setPatronymic,
        dateOfBirth,
        setDateOfBirth,
        passportSeria,
        setPassportSeria,
        passportNumber,
        setPassportNumber,
        passportCreatedAt,
        setPassportCreatedAt,
        passportIdentity,
        setPassportIdentity,
        passportLocation,
        setPassportLocation,
        city,
        setCity,
        address,
        setAddress,
        phoneHome,
        setPhoneHome,
        phoneMobile,
        setPhoneMobile,
        email,
        setEmail,
        job,
        setJob,
        jobPosition,
        setJobPosition,
        cityRegistration,
        setCityRegistration,
        maritalStatus,
        setMaritalStatus,
        citizenship,
        setCitizenship,
        disability,
        setDisability,
        pensioner,
        setPensioner,
        monthlyMoneyProfile,
        setMonthlyMoneyProfile,
    } = useAddClientStore();

    const {table} = useAirTable();

    return <>
        <ActionsContainer>
            <Button color='primary'
                    variant='contained'
                    onClick={async () => {
                        await table.create([{
                            fields: {
                                name,
                                surname,
                                patronymic,
                                dateOfBirth,
                                passportSeria,
                                passportNumber,
                                passportCreatedAt,
                                passportIdentity,
                                passportLocation,
                                city,
                                address,
                                phoneHome,
                                phoneMobile,
                                email,
                                job,
                                jobPosition,
                                cityRegistration,
                                maritalStatus,
                                citizenship,
                                disability,
                                pensioner,
                                monthlyMoneyProfile,
                            }
                        }])
                        toClients();
                    }}>Save</Button>
            <Button color='secondary'
                    variant='contained'
                    onClick={toClients}>Cancel</Button>
        </ActionsContainer>
        <Box pl={4}
             display='flex'
             flexWrap='wrap'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TextInput value={name || ''}
                           setValue={setName}
                           label={NAME_LABEL}/>
                <TextInput value={surname || ''}
                           setValue={setSurname}
                           label={SURNAME_LABEL}/>
                <TextInput value={patronymic || ''}
                           setValue={setPatronymic}
                           label={PATRONYMIC_LABEL}/>
                <DateInput value={dateOfBirth}
                           setValue={setDateOfBirth}
                           label={DATE_OF_BIRTH_LABEL}/>
                <TextInput value={passportSeria || ''}
                           setValue={setPassportSeria}
                           label={PASSPORT_SERIA_LABEL}/>
                <TextInput value={passportNumber || ''}
                           setValue={setPassportNumber}
                           label={PASSPORT_NUMBER_LABEL}/>
                <DateInput value={passportCreatedAt}
                           setValue={setPassportCreatedAt}
                           label={PASSPORT_CREATED_AT_LABEL}/>
                <TextInput value={passportIdentity || ''}
                           setValue={setPassportIdentity}
                           label={PASSPORT_IDENTITY_LABEL}/>
                <TextInput value={passportLocation || ''}
                           setValue={setPassportLocation}
                           label={PASSPORT_LOCATION_LABEL}/>
                <TextInput value={city || ''}
                           setValue={setCity}
                           label={CITY_LABEL}/>
                <TextInput value={address || ''}
                           setValue={setAddress}
                           label={ADDRESS_LABEL}/>
                <TextInput value={phoneHome || ''}
                           setValue={setPhoneHome}
                           label={PHONE_HOME_LABEL}/>
                <TextInput value={phoneMobile || ''}
                           setValue={setPhoneMobile}
                           label={PHONE_MOBILE_LABEL}/>
                <TextInput value={email || ''}
                           setValue={setEmail}
                           label={EMAIL_LABEL}/>
                <TextInput value={job || ''}
                           setValue={setJob}
                           label={JOB_LABEL}/>
                <TextInput value={jobPosition || ''}
                           setValue={setJobPosition}
                           label={JOB_POSITION_LABEL}/>
                <TextInput value={cityRegistration || ''}
                           setValue={setCityRegistration}
                           label={CITY_REGISTRATION_LABEL}/>
                <TextInput value={maritalStatus || ''}
                           setValue={setMaritalStatus}
                           label={MARITAL_STATUS_LABEL}/>
                <TextInput value={citizenship || ''}
                           setValue={setCitizenship}
                           label={CITIZENSHIP_LABEL}/>
                <TextInput value={disability || ''}
                           setValue={setDisability}
                           label={DISABILITY_LABEL}/>
                <BoolInput value={pensioner || false}
                           setValue={setPensioner}
                           label={PENSIONER_LABEL}/>
                <TextInput value={monthlyMoneyProfile || ''}
                           setValue={setMonthlyMoneyProfile}
                           label={MONTHLY_MONEY_PROFILE_LABEL}/>
            </MuiPickersUtilsProvider>
        </Box>
    </>;
});
