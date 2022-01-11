import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {MdFingerprint} from 'react-icons/md';
import styled from 'styled-components';
import {ButtonContainer} from './Button';




export default class NavBar extends Component {
    render() {
        return (
           <NavWrapper className='navbar navbar-expand-sm 
           navbar-dark px-sm-5 '>

               
               <Link to="/" className='navbar-brand'>
                   <MdFingerprint></MdFingerprint>GREY_LUXURY
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className='nav-item ml-5'>
                       <Link to='/' className='nav-link'>
                           Product
                       </Link>


                   </li>
               </ul>
               <Link to='/Cart' className='ml-auto'>
                  <ButtonContainer>
                      <span className='mr-2'>
                           <i class="fas fa-shopping-cart"> my cart</i>

                      </span>
                      
                  </ButtonContainer>
               </Link>
               
           </NavWrapper>

        
        )
    }
}

const NavWrapper = styled.nav`
 background: var(--mainDark);
 .nav-link{
     color: var(--mainWhite) !important;
 font-size: 1.3rem;
 text-transform; capitalize;
 }



`
  