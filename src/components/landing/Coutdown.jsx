import React, { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  
    function getTimeLeft() {
      const difference = +new Date(date) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    }
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [date]);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', justifyContent: 'center' }}>
        <div className='countdown__grid'>
          <span className='countdown__time'>{timeLeft.days.toString().padStart(2, '0')}</span>   
          <span className='countdown__time'>{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className='countdown__time'>{timeLeft.minutes.toString().padStart(2, '0')} </span>
          <span className='countdown__time'>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className='countdown__text'>DAYS</span>
          <span className='countdown__text'>HRS</span>
          <span className='countdown__text'>MINS</span>
          <span className='countdown__text'>SECS</span>
          {/* <div className='countdown__text'>
            
          </div> */}
        </div>   
      </div>
    );
  };
  

export default Countdown;