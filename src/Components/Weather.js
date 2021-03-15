import React, { Component } from 'react';

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=776b061b368518aa6aca66c7b0c8eab6&units=metric";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

    }
    componentDidMount() {
        console.log('hej')

        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        console.log('Hej från render')
        return (
            <div>
                <span>It feels like {this.state.data ? this.state.data.main.feels_like.toFixed(1) : '?'} °C in Stockholm right now. </span>
                <span>{this.state.data ? this.state.data.main.temp : null}</span>
            </div>
        )
    }
}

export default Weather;