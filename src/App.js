import './App.css';
import React from "react";
import Info from "./components/info/info";
import Form from "./components/header/form";
import Weather from "./components/weather/weather";

const api_key = "051f87619eb9536d2a2cfd39951f75cb"

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        error: undefined,
        time: undefined,
        pressure: undefined,
        precip: undefined,
        wind_speed: undefined,
        feelslike: undefined,
        weather_code: undefined,
    }

    gettingWeather = async (e) => {
        e.preventDefault()
        let city = e.target.elements.city.value

        if(city) {
            const api_url = await fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
            const data = await api_url.json()
            console.log(data)
            this.setState({
                temp: data.current.temperature,
                city: data.location.name,
                country: data.location.country,
                time: data.current.observation_time,
                pressure: data.current.pressure,
                precip: data.current.precip,
                wind_speed: data.current.wind_speed,
                feelslike: data.current.feelslike,
                weather_code: data.current.weather_code,
                error: ""
            })
        }
    }

    render() {
        return (
            <div className={'conteiner'}>
                <div className={"header"}>
                    <Form weather={this.gettingWeather}/>
                </div>
                <div className={'info'}>
                    {this.state.city ? <Info temp={this.state.temp}
                                                weather_code={this.state.weather_code}
                                                city={this.state.city}
                                                time={this.state.time}/> : <div></div>}
                </div>
                <div className={"weather"}>
                    {this.state.city ? <Weather error={this.state.error}
                                                temp={this.state.temp}
                                                precip={this.state.precip}
                                                wind_speed={this.state.wind_speed}
                                                feelslike={this.state.feelslike}
                                                pressure={this.state.pressure}
                                                /> : <div></div>}
                </div>
            </div>
        );
    }

}

export default App;
