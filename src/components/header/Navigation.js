import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar dark color='dark'>
                    <NavbarBrand href="/" className='container'>Bohubrihi Restaurant</NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation;
