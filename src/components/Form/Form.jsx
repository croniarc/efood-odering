import React from 'react'
import SectionHeadings from '../SectionHeadings/SectionHeadings'
import Button from '@/app/login/Button'
import Input from '../Input/Input'

const Form = (props) => {
    return (
        <>
            <section className='flex gap-2 flex-col p-8 justify-center text-center bg-backgroundColour3 rounded-3xl'>
                <SectionHeadings heading ={props.formData.formHeading} subHeading={props.formData.formSubHeading}/>
                <div className='flex flex-col justify-between gap-4'>
                {
                    props.formData.formFields.map((field, index) => {

                        return (
                            <div key={index} className='flex flex-col justify-center text-center'>
                                <Input {...field}/>
                            </div>
                        )
                    })
                }
                </div>
                <div className='flex flex-col justify-between gap-4'>
                {
                    props.formData.formActions.map((action, index) => {
                        return (
                            <div key={index} >
                                <Button type={action.type} text={action.bText} func={action.func}/>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </>
    )
}

// Form.defaultProps = {
//     formData:{
//         formHeading: 'Form Heading',
//         formSubHeading: 'Form Subheading',
//         formFields: [
//             {
//                 type: 'email',
//                 placeholder: 'Email',
//                 value: '',
//                 required: true,
//                 disabled: false,
//             },
//             {
//                 type: 'password',
//                 placeholder: 'Password',
//                 value: '',
//                 required: true,
//                 disabled: false,
//             }
//         ],
//         formActions: [
//             {
//                 type: 'submitButton',
//                 bText: 'Submit Button',
//                 func: () => { console.log('Submit Button Clicked') }
//             }
//         ]
//     }
// }

export default Form
