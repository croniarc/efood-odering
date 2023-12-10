import React from 'react'
import NavBar from '../Navbar/NavBar'

const PageContainer = ({ children, hCenter }) => {
    return (
        <section className={`flex gap-6 items-center ${ hCenter && 'justify-center'} flex-col w-screen h-screen`}>
            { children }
        </section>
    )
}

export default PageContainer
