import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function CircularProgressBarOne() {

    const percentage = 76;

  return (
    <div style={{width:"70px"}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} 
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            //rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '18px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(255, 127, 0, ${percentage / 100})`,
            textColor: 'orange',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
        })}
        />
    </div>
  )
}

export default CircularProgressBarOne