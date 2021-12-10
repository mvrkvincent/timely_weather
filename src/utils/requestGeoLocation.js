const requestPosition = () => {
    return new Promise((res, err) => {
        navigator.geolocation.getCurrentPosition(res, err);
    });
};

export const requestGeoLocation = async () => {
    const res = await requestPosition(); 
    return res;
};