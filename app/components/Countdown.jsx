const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped',
            timerStatus: 'n/a'
        };
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        // console.log('Component did unmount');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        // alert('here');
        this.setState({countdownStatus: newStatus});
    },
    render: function() {
        let {count, countdownStatus, timerStatus} = this.state;
        let renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} timerStatus={timerStatus} onStatusChange={this.handleStatusChange}></Controls>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>;
            }
        }
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}></Clock>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;