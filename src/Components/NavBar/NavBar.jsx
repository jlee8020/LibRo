import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
    <>
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      {props.user && 
      <Link to="/allbooks" className='NavBar-link'>All Books</Link>}
      &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <Link to="/add" className='NavBar-link' >Add A Book</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </>
    :
    <>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} >LOG OUT</Link>
    </>;
  return (
    <nav>
      {nav}
    </nav>
  );
};

export default NavBar;