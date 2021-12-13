const CONDITION_PROPS = {
    '01d': {ico:'fas fa-sun', color: 'linear-gradient(330deg, red , yellow)',},
    '02d': {ico:'fas fa-cloud-sun', color: 'linear-gradient(330deg, blue, yellow)',},
    '03d': {ico:'fas fa-cloud-sun', color: 'linear-gradient(330deg, blue, yellow)',},
    '04d': {ico:'fas fa-cloud', color: 'linear-gradient(330deg, blue, silver)',},
    '09d': {ico:'fas fa-cloud-rain', color: 'linear-gradient(330deg, blue, silver)',},
    '10d': {ico:'fas fa-cloud-sun-rain', color: 'linear-gradient(330deg, blue, silver)',},
    '11d': {ico:'fas fa-cloud-showers-heavy', color: 'linear-gradient(330deg, blue, #565656)',},
    '13d': {ico:'fas fa-cloud-showers-heavy', color: 'linear-gradient(330deg, blue, #565656)',},
    '50d': {ico:'fas fa-smog', color: 'linear-gradient(330deg, silver, blue)',},
    '01n': {ico:'fas fa-moon', color: 'linear-gradient(330deg, navy, purple)',},
    '02n': {ico:'fas fa-cloud-moon', color: 'linear-gradient(330deg, black, silver)',},
    '03n': {ico:'fas fa-cloud-moon', color: 'linear-gradient(330deg, black, silver)'},
    '04n': {ico:'fas fa-cloud', color: 'linear-gradient(330deg, black, #eaeaea)',},
    '09n': {ico:'fas fa-cloud-rain', color: 'linear-gradient(330deg, black, #eaeaea)',},
    '10n': {ico:'fas fa-cloud-moon-rain', color: 'linear-gradient(330deg, black, #eaeaea)',},
    '11n': {ico:'fas fa-cloud-showers-heavy', color: 'linear-gradient(330deg, black, #565656)',},
    '13n': {ico:'fas fa-snowflake', color: 'linear-gradient(330deg, black, #eaeaea)',},
    '50n': {ico:'fas fa-smog', color: 'linear-gradient(330deg, black, #eaeaea)',},
};

export const returnConditionProps = icon => {
    return CONDITION_PROPS[icon];
}