import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native"
import { useState, useEffect } from 'react';

import Forecast from './Forecast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: "-",
        description: "-",
        temp: 0
    })

        useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=4861b7b0c3729227d0c8ca7da4f2e133`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
        .catch((error) => {
            console.warn(error);
        });
 }
 }, [props.zipCode])

    

    return (
           <ImageBackground source={require('../img.jpg')} style={styles.backdrop}>
                <Text>Zip code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </ImageBackground> 
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
});