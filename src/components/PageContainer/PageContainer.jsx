import React from 'react'
import NavBar from '../Navbar/NavBar'

const PageContainer = ({ children, hCenter }) => {
    return (
        <section className={`flex gap-6 items-center flex-col`}>
            { children }
        </section>
    )
}

export default PageContainer
