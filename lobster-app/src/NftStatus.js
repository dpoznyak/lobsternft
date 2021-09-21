
import React, { useEffect, useState} from 'react'
import {timer} from 'rxjs';

const apiUrl = process.env.REACT_APP_API_URL;

// export const NftStatusContext = React.createContext();
const POLL_DELAY = process.env.REACT_APP_API_POLL_DELAY || 3000;
export class NftStatus extends React.Component  {


    constructor() {
        super();
    }

    setIntervalLazy(callbackAsync, delay) {
        this.interval = setInterval(() => {
            clearInterval(this.interval);
            callbackAsync().then(r => 
                this.setIntervalLazy(callbackAsync, r || delay));
        }, delay);
    }

    startPoll() {
        this.setIntervalLazy(() => 
        fetch(apiUrl)
            .then(r => r.json())
            .then(json =>  {
                        console.log(`fetch received: ${JSON.stringify(json)}`);
                        this.setState({response: json, estimatedName:json.estimatedResult?.name });
                    }, 
                    reason => {
                        console.error("Failed to fetch: " + reason);
                        this.setState({error: reason})
                    })
            .then(_ => POLL_DELAY)
        , 10);
    }

    stopPoll() { 
        console.log(">stopPoll");
        clearInterval(this.interval);
    }

    componentDidMount() {
       this.startPoll();
    }

    componentWillUnmount() {
        this.stopPoll();
    }

   

    render = () => <>
                <>
                {this.props.render({
                    progress: this.state?.response?.progressPct,
                    progressDisplay: this.state?.response?.ratioDisplay,
                    estimatedName: this.state?.response?.estimatedResult?.name})}
                </>
            </>
}