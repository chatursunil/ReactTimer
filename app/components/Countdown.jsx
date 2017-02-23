const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
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
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },
    render: function() {
        let {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}></Clock>
                <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
            </div>
        );
    }
});

module.exports = Countdown;