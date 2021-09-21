
import React from 'react';
import { Line } from 'rc-progress';
import ProgressBar2 from "@ramonak/react-progress-bar";
// import ProgressBarComponent from 'react-animated-progress-bar';
import {ProgressBarComponent} from './ProgressBarComponent';

function ProgressBar({percentage}) {

    return (
    <>

      <ProgressBarComponent progress={percentage} />
    </>
    )
}

export default ProgressBar;