import React from 'react'

const SectionHeadings = ({heading, subHeading}) => {
    return (
        <>
            <h1 className={`text-$-600 font-bold text-4xl`}>{heading}</h1>
            <h2 className={`text-$-400 font-bold text-2xl`}>{subHeading}</h2>
        </>
    )
}

export default SectionHeadings
