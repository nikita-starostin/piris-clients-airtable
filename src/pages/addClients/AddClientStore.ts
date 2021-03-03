import {makeAutoObservable} from 'mobx';

export class AddClientStore {
    name?: string;
    surname?: string;
    patronymic?: string;
    dateOfBirth?: Date | null = new Date();
    passportSeria?: string;
    passportNumber?: string;
    passportCreatedAt?: Date | null = new Date();
    passportIdentity?: string;
    passportLocation?: string;
    city?: string;
    address?: string;
    phoneHome?: string;
    phoneMobile?: string;
    email?: string;
    job?: string;
    jobPosition?: string;
    cityRegistration?: string;
    maritalStatus?: string;
    citizenship?: string;
    disability?: string;
    pensioner?: boolean;
    monthlyMoneyProfile?: string;

    constructor() {
        this.setName = this.setName.bind(this);
        this.setSurname = this.setSurname.bind(this);
        this.setPatronymic = this.setPatronymic.bind(this);
        this.setDateOfBirth = this.setDateOfBirth.bind(this);
        this.setPassportSeria = this.setPassportSeria.bind(this);
        this.setPassportNumber = this.setPassportNumber.bind(this);
        this.setPassportCreatedAt = this.setPassportCreatedAt.bind(this);
        this.setPassportIdentity = this.setPassportIdentity.bind(this);
        this.setPassportLocation = this.setPassportLocation.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setPhoneHome = this.setPhoneHome.bind(this);
        this.setPhoneMobile = this.setPhoneMobile.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setJob = this.setJob.bind(this);
        this.setJobPosition = this.setJobPosition.bind(this);
        this.setCityRegistration = this.setCityRegistration.bind(this);
        this.setMaritalStatus = this.setMaritalStatus.bind(this);
        this.setCitizenship = this.setCitizenship.bind(this);
        this.setDisability = this.setDisability.bind(this);
        this.setPensioner = this.setPensioner.bind(this);
        this.setMonthlyMoneyProfile = this.setMonthlyMoneyProfile.bind(this);
        makeAutoObservable(this);
    }

    setName(name: string | undefined) {
        this.name = name;
    }

    setSurname(surname: string | undefined) {
        this.surname = surname;
    }

    setPatronymic(patronymic: string | undefined) {
        this.patronymic = patronymic;
    }

    setDateOfBirth(dateOfBirth: Date | undefined | null) {
        console.log(dateOfBirth);
        this.dateOfBirth = dateOfBirth || undefined;
    }

    setPassportSeria(passportSeria: string | undefined) {
        this.passportSeria = passportSeria;
    }

    setPassportNumber(passportNumber: string | undefined) {
        this.passportNumber = passportNumber;
    }

    setPassportCreatedAt(passportCreatedAt: Date | undefined | null) {
        this.passportCreatedAt = passportCreatedAt || undefined;
    }

    setPassportIdentity(passportIdentity: string | undefined) {
        this.passportIdentity = passportIdentity;
    }

    setPassportLocation(passportLocation: string | undefined) {
        this.passportLocation = passportLocation;
    }

    setCity(city: string | undefined) {
        this.city = city;
    }

    setAddress(address: string | undefined) {
        this.address = address;
    }

    setPhoneHome(phoneHome: string | undefined) {
        this.phoneHome = phoneHome;
    }

    setPhoneMobile(phoneMobile: string | undefined) {
        this.phoneMobile = phoneMobile;
    }

    setEmail(email: string | undefined) {
        this.email = email;
    }

    setJob(job: string | undefined) {
        this.job = job;
    }

    setJobPosition(jobPosition: string | undefined) {
        this.jobPosition = jobPosition;
    }

    setCityRegistration(cityRegistration: string | undefined) {
        this.cityRegistration = cityRegistration;
    }

    setMaritalStatus(maritalStatus: string | undefined) {
        this.maritalStatus = maritalStatus;
    }

    setCitizenship(citizenship: string | undefined) {
        this.citizenship = citizenship;
    }

    setDisability(disability: string | undefined) {
        this.disability = disability;
    }

    setPensioner(pensioner: boolean | undefined) {
        this.pensioner = pensioner;
    }

    setMonthlyMoneyProfile(monthlyMoneyProfile: string | undefined) {
        this.monthlyMoneyProfile = monthlyMoneyProfile;
    }
}
