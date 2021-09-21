import React from "react";
import PropTypes from 'prop-types';

export function ProgressBarComponent({progress})  {

    const indefinite = undefined === progress;
    return (
        <div className={`w-full rounded-full bg-gray-300 h-4 ${indefinite ? "animate-pulse" : ""}`}>
            <div className="rounded-full bg-red-400 h-full transition-all duration-500" 
            style={{width: (progress || 0)+ "%", minWidth: "10px"}} ></div>
        </div>
    )
}

ProgressBarComponent.propTypes = { 
    progress: PropTypes.number
}
