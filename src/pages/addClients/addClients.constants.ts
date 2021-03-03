import {CitizenshipEnum} from './enums/CitizenshipEnum';
import {CityEnum} from './enums/CityEnum';
import {DisabilityEnum} from './enums/DisabilityEnum';
import {MaritalStatusEnum} from './enums/MaritalStatusEnum';

const stringIsNumber = (value: string | number) => !isNaN(Number(value));
const stringIsNotNumber = (value: string | number) => !stringIsNumber(value);
function enumToArray(enumme: any): string[] {
   return Object.keys(enumme)
       .filter(stringIsNotNumber)
       .map(key => enumme[key]);
}


export const CITY_ENUM_VALUES = enumToArray(CityEnum);
export const MARITAL_ENUM_VALUES = enumToArray(MaritalStatusEnum);
export const DISABILITY_ENUM_VALUES = enumToArray(DisabilityEnum);
export const CITIZENSHIP_ENUM_VALUES = enumToArray(CitizenshipEnum);

export const NAME_LABEL = 'Имя';
export const SURNAME_LABEL = 'Фамилия';
export const PATRONYMIC_LABEL = 'Отчество';
export const DATE_OF_BIRTH_LABEL = 'Дата рожд.';
export const PASSPORT_SERIA_LABEL = 'Серия пасспорта';
export const PASSPORT_NUMBER_LABEL = 'Номер пасспорта';
export const PASSPORT_CREATED_AT_LABEL = 'Дата выдачи пасспорта';
export const PASSPORT_IDENTITY_LABEL = 'ID пасспорта';
export const PASSPORT_LOCATION_LABEL = 'Место выдачи пасспорта';
export const CITY_LABEL = 'Город';
export const ADDRESS_LABEL = 'Адрес';
export const PHONE_HOME_LABEL = 'Домашний телефон';
export const PHONE_MOBILE_LABEL = 'Мобильный телефон';
export const EMAIL_LABEL = 'Почта';
export const JOB_LABEL = 'Работа';
export const JOB_POSITION_LABEL= 'Должность';
export const CITY_REGISTRATION_LABEL = 'Город прописки';
export const MARITAL_STATUS_LABEL = 'Семейный статус';
export const CITIZENSHIP_LABEL = 'Гражданство';
export const DISABILITY_LABEL = 'Инвалидность';
export const PENSIONER_LABEL = 'Пенсионер';
export const MONTHLY_MONEY_PROFILE_LABEL = 'Ежемесячный доход';

