const React = require('react');
const Controls = require('Controls');
const Clock = require('Clock');

const Timer = React.createClass({
    getInitialState: function() {
        return {
            time: 0,
            timerStatus: 'stopped',
            countdownStatus: 'n/a'
        };
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch(this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({time: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            let newTime = this.state.time + 1;
            this.setState({time: newTime});
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
         this.setState({timerStatus: newStatus});
    },
    render: function() {
        let {time, countdownStatus, timerStatus} = this.state;
        return(
            <div>
                <h1 className="page-title">Time App</h1>
                <Clock totalSeconds={time}></Clock>
                <Controls countdownStatus={countdownStatus} timerStatus={timerStatus} onStatusChange={this.handleStatusChange}></Controls>
            </div>
        );
    }
});

module.exports = Timer;