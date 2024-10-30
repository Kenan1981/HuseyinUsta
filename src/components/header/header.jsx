import React from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import "../header/style.scss";
import Image from 'next/image';


export const Header = () => {
  return (
    <Navbar className='navbar' bg="dark" variant="dark" expand="lg">
      <NavbarBrand href="#home">
      <div className="imageContainer">
      <Image 
        src="/img/Hüseyin Usta Kamyon Tamircisi Logo.png" 
        alt="Description" 
        width={300} 
        height={300} 
        className="circularImage" 
      />
    </div>
         
        
       
        <span className="navbar-brand-text display-5 ms-2 fw-bold text-white d-none d-lg-block">Hüseyin Usta</span>
      </NavbarBrand>
      <NavbarToggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-nav justify-content-end w-100 ">
          <NavLink className='text-white' href="#home">Ana Sayfa</NavLink>
          <NavLink className='text-white' href="#about">Hakkında</NavLink>
          <NavLink className='text-white' href="#contact">İletişim</NavLink>
        </Nav>
        {/* Sosyal Medya Menüsü */}
        <Nav>
          <NavLink href="https://facebook.com/Besiktas" target="_blank">
            <i className="pi pi-facebook" style={{ fontSize: '1.5rem', margin: '0 10px' }}></i>
          </NavLink>
          <NavLink href="https://x.com/Besiktas" target="_blank">
            <i className="pi pi-twitter" style={{ fontSize: '1.5rem', margin: '0 10px' }}></i>
          </NavLink>
          <NavLink href="https://instagram.com/Besiktas" target="_blank">
            <i className="pi pi-instagram" style={{ fontSize: '1.5rem', margin: '0 10px' }}></i>
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
