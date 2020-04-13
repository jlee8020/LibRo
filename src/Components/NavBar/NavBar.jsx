import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/allbooks" className='btn btn-primary'>All Books</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/add" className='btn btn-primary'>Add A Book</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} >LOG OUT</Link>
    </div>;


  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;