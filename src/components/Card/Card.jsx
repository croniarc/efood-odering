import React from 'react'
import Image from 'next/image'

import ErrorView from '../ErrorView/ErrorView'
import Button from '../Button/Button'
import SectionHeadings from '../SectionHeadings/SectionHeadings'

const Card = ({data}) => {
    return (
        <div className=' flex flex-col gap-4 bg-backgroundColour3 p-8 rounded-3xl hover:shadow-xl ' style={{minWidth: "219px"}} >
            {
                <>
                    {
                        data ? (<>
                            {
                                data.map((data, index) => (
                                    <div key={index}>
                                        <div className='flex gap-4 flex-col items-center justify-between h-full w-full '>
                                            {
                                                (data.image || data.heading || data.subHeading) && <div>
                                                {
                                                    data.image && (
                                                        <Image src={data.image} width={500} height={500} alt={`${data.image}`} />
                                                    )
                                                }
                                                {(data.heading || data.subHeading) && <SectionHeadings heading={data.heading} subHeading={data.subHeading} />}
                                            </div>
        
                                            }
                                            <div className='flex flex-col gap-2'>
                                                {
                                                    data.description && (
                                                        <p>{data.description}</p>
                                                    )
                                                }
                                                {
                                                    (
                                                        <Button {...data} />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>) : (
                            <>
                                <ErrorView/>
                            </>
                        ) 
                    }
                </> 
            }
        </div>
    )
}

// Card.defaultProps = {
//     image: '',
//     width: '',
//     height: '',
//     heading: 'example Heading',
//     subheading: 'example SubHeading',
//     description: 'example description',
//     actions: [
//         {
//             type: 'primaryButton',
//             bText: 'primaryButton',
//             func: () => {
//                 console.log('Default click handler');
//             }
//         }, {
//             type: 'secondaryButton',
//             bText: 'secondaryButton',
//             func: () => {
//                 console.log('Default click handler');
//             }
//         }, {
//             type: 'submitButton',
//             bText: 'submitButton',
//             func: () => {
//                 console.log('Default click handler');
//             }
//         },
//     ]
// }

export default Card
