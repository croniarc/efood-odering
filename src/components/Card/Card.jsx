import React from 'react'
import Image from 'next/image'
import Button from '../../app/login/Button'
import ErrorView from '../ErrorView/ErrorView'

const Card = (props) => {
    return (
        <div className=' inline bg-backgroundColour2 p-4 rounded-lg hover:shadow-xl ' style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            {
                props ? <>
                    <div className='flex flex-col justify-between h-full w-full gap-6 '>
                        <div className=''>
                            {
                                props.image && (
                                    <Image src={props.image} width={500} height={500} alt={`${props.image}`} />
                                )
                            }
                            {
                                props.heading && (
                                    <h1>{props.heading}</h1>
                                )
                            }
                            {
                                props.subheading && (
                                    <h2>{props.subheading}</h2>
                                )
                            }
                        </div>

                        <div className='flex flex-col gap-2'>
                            {
                                props.description && (
                                    <p>{props.description}</p>
                                )
                            }
                            {
                                (
                                    <Button {...[props.actions]} />
                                )
                            }
                        </div>

                    </div>
                </> : <>
                    <ErrorView />
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
