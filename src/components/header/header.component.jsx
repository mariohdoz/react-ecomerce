import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/img/crown.svg'

import './header.styles.scss';

const headerComponent = ({ currentUser }) => (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' /> 
      </Link>
      <div className='options'>
        <Link className='option' to='/shop' >
          SHOP
        </Link>
        <Link className='option' to='/contact' >
          CONTACT
        </Link>
        {
          currentUser? 
          <div className='option' onClick={ () => auth.signOut() }>Sign Out</div>
          :
          <Link className='option' to='/signin'> Sign In </Link>
        }
      </div>
    </div>
);

export default headerComponent;