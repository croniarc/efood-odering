import React from 'react'
import SectionHeadings from '../SectionHeadings/SectionHeadings'
import Input from '../Input/Input'
import ErrorView from '../ErrorView/ErrorView'
import Button from '../Button/Button'

const Form = (props) => {
    const onSubmitFunc = props.formData && props.formData.formActions.map((action) => action.func)
    return (
        <>
            <form className='flex gap-4 flex-col p-8 justify-center text-center bg-backgroundColour3 rounded-3xl hover:shadow-xl' onSubmit={onSubmitFunc[0]}>
                {
                    props.formData ? (
                        <>
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
                                            <Button {...action}/>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </>
                    ) : (
                        <>
                            <ErrorView/>
                        </>
                    )
                }
            </form>
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
//                 func: () => { console.log('Submit Button Clicked') },
//                 disabled: false
//             }
//         ]
//     }
// }

export default Form
