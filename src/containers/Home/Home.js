import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {

    state = {
        "years": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 99
        },
        "months": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 99
        },
        "days": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 365
        },
        "hours": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 24
        },
        "minutes": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 60
        },
        "seconds": {
            "number": 0,
            "number_representation": "00",
            "classes": ["number", "number"],
            "max_number": 60
        }
    }

    getNumberRepresentation(number, length) {
        return String(number).padStart(length, '0')
    }

    doFlip(entities) {
        let stateCopy = {...this.state};
        for (var [key, value] of Object.entries(entities)) {
            let length = this.state[key].number_representation.length
            let valueString = this.getNumberRepresentation(value, length)
            for (let i = 0; i < length; i++){
                if (this.state[key].number_representation[i] != valueString[i]) {
                    stateCopy[key].classes[i] = "number flip";
                    this.setState(stateCopy);
                    setTimeout(() => {
                        stateCopy[key].number = value;
                        stateCopy[key].number_representation = valueString;
                        stateCopy[key].classes[i] = "number";
                        this.setState(stateCopy);
                    }, 500);
                }
            }
        }
    }

    loadInitialData() {
        let actualDate = new Date()
        let originDate = new Date(2018, 5, 27, 0, 0, 0, 0);
        let stateCopy = {...this.state};
        stateCopy.years.number = actualDate.getFullYear() - originDate.getFullYear();
        stateCopy.years.number_representation = this.getNumberRepresentation(actualDate.getFullYear() - originDate.getFullYear(), 2);
        let actualDateLessOneMonth = new Date();
        actualDateLessOneMonth.setMonth(actualDateLessOneMonth.getMonth() - 1);
        actualDateLessOneMonth.setDate(27);
        let days = parseInt((actualDate.getTime() - actualDateLessOneMonth.getTime()) / (1000 * 3600 * 24));
        stateCopy.days.number = days
        stateCopy.days.number_representation = this.getNumberRepresentation(days, 2);
        stateCopy.minutes.number = actualDate.getMinutes() - originDate.getMinutes();
        stateCopy.minutes.number_representation = this.getNumberRepresentation(actualDate.getMinutes() - originDate.getMinutes(), 2);
        stateCopy.months.number = actualDate.getMonth() - originDate.getMonth();
        stateCopy.months.number_representation = this.getNumberRepresentation(actualDate.getMonth() - originDate.getMonth(), 2);
        stateCopy.seconds.number = actualDate.getSeconds() - originDate.getSeconds();
        stateCopy.seconds.number_representation = this.getNumberRepresentation(actualDate.getSeconds() - originDate.getSeconds(), 2);

        this.setState(stateCopy);
    }


    realoadData() {
        let actualDate = new Date()
        let originDate = new Date(2018, 5, 27, 0, 0, 0, 0);
        let stateCopy = {...this.state};
        let years = actualDate.getFullYear() - originDate.getFullYear();
        let months = actualDate.getMonth() - originDate.getMonth();
        let actualDateLessOneMonth = new Date();
        actualDateLessOneMonth.setMonth(actualDateLessOneMonth.getMonth() - 1);
        actualDateLessOneMonth.setDate(27);
        let days = parseInt((actualDate.getTime() - actualDateLessOneMonth.getTime()) / (1000 * 3600 * 24));
        let hours = actualDate.getHours() - originDate.getHours();
        let minutes = actualDate.getMinutes() - originDate.getMinutes()
        let seconds = actualDate.getSeconds() - originDate.getSeconds()
        this.doFlip({years, months, days, hours, minutes, seconds})
    }

    componentDidMount() {
        this.loadInitialData();
        setInterval(() => {this.realoadData();}, 1000);
    }

    render () {
        return (
                <div class="container">
                    <div class="row">
                        <div class="card">
                          <div class="card-header text-center">
                            Years
                          </div>
                          <div class="card-body">
                            <span class={ this.state.years.classes[0] } data-number={ this.state.years.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.years.classes[1] } data-number={ this.state.years.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header text-center">
                            Months
                          </div>
                          <div class="card-body">
                            <span class={ this.state.months.classes[0] } data-number={ this.state.months.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.months.classes[1] } data-number={ this.state.months.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header text-center">
                            Days
                          </div>
                          <div class="card-body">
                            <span class={ this.state.days.classes[0] } data-number={ this.state.days.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.days.classes[1] } data-number={ this.state.days.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header text-center">
                            Hours
                          </div>
                          <div class="card-body">
                            <span class={ this.state.hours.classes[0] } data-number={ this.state.hours.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.hours.classes[1] } data-number={ this.state.hours.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header text-center">
                            Minutes
                          </div>
                          <div class="card-body">
                            <span class={ this.state.minutes.classes[0] } data-number={ this.state.minutes.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.minutes.classes[1] } data-number={ this.state.minutes.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header text-center">
                            Seconds
                          </div>
                          <div class="card-body">
                            <span class={ this.state.seconds.classes[0] } data-number={ this.state.seconds.number_representation[0] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                            <span class={ this.state.seconds.classes[1] } data-number={ this.state.seconds.number_representation[1] }>
                                <span class="primary">
                                </span>
                                <span class="secondary">
                                </span>
                            </span>
                          </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Home;