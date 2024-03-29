import React from 'react'

const Input = (props) => {
    
    const field = [props]
    return (
        <>
            {
                field.map((data, index) => (
                    <div key={index} className='flex flex-col gap-2 justify-center text-center '>
                        { data.label && <label htmlFor={data.label}>{data.label}</label>}
                        <input
                            type={data.type} 
                            id={data.label} 
                            placeholder={data.placeholder} 
                            value={data.value}
                            onChange={data.onChange}
                            required={data.required} 
                            disabled={data.disabled}
                            className='px-3 rounded-xl focus-visible:outline-2 focus-visible:outline-primaryColour'
                            style={{minWidth:"180px", minHeight:"46px"}}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Input
