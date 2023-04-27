import React from 'react';
import './Launch.css';
import {Countdown} from './components';
import logo from '../src/assets/Logo.png';


function Launch () {
  const launchDate = new Date('2023-08-15T09:00:00.000Z');

  return (
    <div className='Launch'>
      <div className='container__bg'>
        <div className='launch__title'>
          <span>LAUNCHING SOON</span>
        </div>
        <div className='launch__subtext'>
          <p>
          Unlock your potential and achieve your career goals with the guidance of experienced professionals from your dream companies. 
          Take the first step towards achieving your dreams - join our mentorship program today.
          </p>
        </div>
        <div>
          <Countdown date={launchDate} />
        </div>
        <div className='launch__subscription-text'>
          <p>Subscribe to our newsletter and be the first to know when we launch!</p>
        </div>
        <div className='launch__input'>
        <form>
          <div class="form-group launch__input-form">
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email" />
            <button type="submit" class="btn">Get Started</button>
          </div>
        </form>
        </div>
        <div className='launch__end'>
        <img src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default Launch;
