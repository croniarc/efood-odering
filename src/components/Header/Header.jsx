"use client"

import {useState} from 'react'
import NavBar from '../Navbar/NavBar'

const Header = () => {
    const [data, setData] = useState();

    if (!data) {
        setData({
            navBarData: [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'About',
                    url: '/about'
                },
                {
                    name: 'Contact',
                    url: '/contact'
                }
            ]
        })
    }
    return (
        <>
            <NavBar {...data}/>
        </>
    )
}

export default Header
