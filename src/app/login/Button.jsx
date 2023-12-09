import React from 'react'
import ErrorView from '../../components/ErrorView/ErrorView'

const Button = (props) => {
    const ButtonData = [props]
    const handleClick = (func) => {
        console.log(func)
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
                                        onClick={handleClick(data.func)}
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
                                            onClick={handleClick(data.func)}
                                        >
                                            {data.text}
                                        </button>
                                        </>
                                    ) : (
                                        data.type === 'submitButton' ? (
                                            <>
                                                <button
                                                className='w-full h-full'
                                                    style={{minWidth:"180px", minHeight:"46px"}}
                                                    onClick={handleClick(data.func)}
                                                >
                                                    {data.text}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <ErrorView/>
                                            </>
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