const CONDITION_PROPS = {
    '01d': {ico:'fas fa-sun', color: '',},
    '02d': {ico:'fas fa-cloud-sun', color: '',},
    '03d': {ico:'fas fa-cloud-moon', color: '',},
    '04d': {ico:'fas fa-cloud', color: '',},
    '09d': {ico:'fas fa-cloud-rain', color: '',},
    '10d': {ico:'fas fa-cloud-sun-rain', color: '',},
    '11d': {ico:'fas fa-cloud-showers-heavy', color: '',},
    '13d': {ico:'fas fa-cloud-showers-heavy', color: '',},
    '50d': {ico:'fas fa-smog', color: '',},
    '01n': {ico:'fas fa-moon', color: '',},
    '02n': {ico:'fas fa-cloud-moon', color: '',},
    '03n': {ico:'fas fa-cloud-moon', color: '',},
    '04n': {ico:'fas fa-cloud', color: '',},
    '09n': {ico:'fas fa-cloud-rain', color: '',},
    '10n': {ico:'fas fa-cloud-moon-rain', color: '',},
    '11n': {ico:'fas fa-cloud-showers-heavy', color: '',},
    '13n': {ico:'fas fa-snowflake', color: '',},
    '50n': {ico:'fas fa-smog', color: '',},
};

export const returnConditionProps = () => {
    return CONDITION_PROPS;
}