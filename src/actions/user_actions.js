export const fetchCurrentLocation = () => async dispatch => {

    const onSuccess = position => {
        console.log(position.coords)
    };
    const onFailure = error => {
        console.log(error)
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
  
};