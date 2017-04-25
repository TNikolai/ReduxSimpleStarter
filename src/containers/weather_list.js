import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkComponent from '../components/spark_component';
import GoogleMap from '../components/google_map';



 class WeatherList extends Component {

renderWeather(cityWeather) {
    const name = cityWeather.city.name;
    const temps = cityWeather.list.map(weather => weather.main.temp);
    const pressure = cityWeather.list.map(weather => weather.main.pressure);
    const humidity = cityWeather.list.map(weather => weather.main.humidity);  
    const { lon, lat } = cityWeather.city.coord;

    return (
        <tr key={name} >
            <td> <GoogleMap lon={lon} lat={lat}> </GoogleMap> </td>
            <td> <SparkComponent data={temps} color="blue" units="K" /> </td>
            <td> <SparkComponent data={pressure} color="green" units="hPa" /> </td>
            <td> <SparkComponent data={humidity} color="red" units="%" /> </td>
        </tr>
    )
}



    render() {
        return (
            <table className="table table-hover" >
                <thread>
                    <tr>
                        <th>City</th>
                        <th>Temperature K </th>
                        <th>Pressure hPa </th>
                        <th>Humidity % </th>
                    </tr>
                </thread> 
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return {weather};
}

export default connect(mapStateToProps,)(WeatherList);