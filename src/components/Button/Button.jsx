import React from 'react'
import ErrorView from '../../components/ErrorView/ErrorView'
import SectionHeadings from '../SectionHeadings/SectionHeadings'
import Link from 'next/link'

const Button = (props) => {
    const ButtonData = [props]
    const handleClick = (func) => {
        func();
    }
    return (
        <>
            {
                ButtonData && (
                    ButtonData.map((data, index) => (
                        <div key={index}>
                            {
                                data.type === 'primaryButton' ? (
                                    <>
                                        {(data.heading || data.subHeading) && <SectionHeadings heading={data.heading} subHeading={data.subHading}/>}
                                    <button className='
                                        flex 
                                        justify-center 
                                        items-center 
                                        text-center
                                        w-full
                                        h-full
                                        bg-primaryColour
                                        rounded-full
                                        hover:shadow-xl'
                                        onClick={() =>handleClick(data.func)}
                                        style={{minWidth:"180px", minHeight:"46px"}}
                                    > 
                                        {data.text}
                                    </button>
                                    </>
                                ) : (
                                    data.type === 'secondaryButton' ? (
                                        <>
                                        <button className='
                                            flex 
                                            justify-center 
                                            items-center 
                                            text-center
                                            w-full
                                            h-full
                                            bg-secondaryColour
                                            rounded-full
                                            hover:shadow-xl'
                                            style={{minWidth:"180px", minHeight:"46px"}}
                                            onClick={() =>handleClick(data.func)}
                                        >
                                            {data.text}
                                        </button>
                                        </>
                                    ) : (
                                        data.type === 'submitButton' ? (
                                            <>
                                                <button
                                                className='w-full h-full bg-secondaryColour rounded-full hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
                                                    style={{minWidth:"180px", minHeight:"46px"}}
                                                    disabled={data.disabled}
                                                >
                                                    {data.text}
                                                </button>
                                            </>
                                        ) : (
                                            data.type === 'linkButton' ? (
                                                <>
                                                    <Link
                                                        href={`/${data.link}`}
                                                        className='
                                                            flex 
                                                            justify-center 
                                                            items-center 
                                                            text-center
                                                            w-full
                                                            h-full
                                                            bg-primaryColour
                                                            rounded-full
                                                            hover:shadow-xl'
                                                            style={{minWidth:"180px", minHeight:"46px"}}
                                                    >
                                                        {data.text}
                                                    </Link>
                                                </>
                                            ) : (
                                                <ErrorView />
                                            )
                                        )
                                    )
                                )
                            }
                        </div>
                    ))
                )
            }
        </>
    )
}

export default Button