import axios from "axios";

export default function (req, res, next) {
    const countryName = req.getCountry.countryName;
    
    const url = `https://restcountries.eu/rest/v1/name/${countryName}`;

    console.log(" --- GET COUNTRY START --- " + JSON.stringify(url));

    return axios.get(url)
        .then((response) => {
            console.log(" --- GET COUNTRY END SUCCESS --- " + JSON.stringify(response.status));
            req.country = response.data[0];
                
            return next();
        })
        .catch((error) => {
            console.log(" --- GET COUNTRY END FAILURE --- ");
            if (error instanceof Error) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            } else {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.data);
                console.log(error.status);
            }
            return next(error);
        })
        ;
};