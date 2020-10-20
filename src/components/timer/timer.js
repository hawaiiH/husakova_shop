import React, {Component} from 'react';
import './timer.css';

class Timer extends Component{

    timer = {
        timeLeft: '10',
        days: '10',
        hours: '10',
        minutes: '10',
        seconds: '10'
    }

    getTimeRemaining = (endtime) => {
        const timeLeft = Date.parse(endtime) - Date.parse(new Date());

        const seconds = Math.floor((timeLeft/1000)%60),
            minutes = Math.floor(timeLeft/(1000*60)%60),
            hours = Math.floor(timeLeft/(1000*60*60)%24),
            days = Math.floor(timeLeft/(1000*60*60*24))
        
        this.setState(this.timer, () => {
            return {
                timeLeft,
                days,
                hours,
                minutes,
                seconds
            }
        });
    }

    render() {
        const tim = setInterval(this.getTimeRemaining, 1000, '2020-10-20');

        return (
            <div className="containerz">
                <div className="numbersz"><div><span id="days">{this.timer.days}</span></div><div className="descriptionz">Дней</div></div>
                <div className="numbersz"><div><span id="hours">{this.timer.hours}</span></div><div className="descriptionz">Часов</div></div>
                <div className="numbersz"><div><span id="minutes">{this.timer.minutes}</span></div><div className="descriptionz">Минут</div></div>
                <div className="numbersz"><div><span id="seconds">{this.timer.seconds}</span></div><div className="descriptionz">Секунд</div></div>      
            </div>
        );
    }
}
export default Timer;