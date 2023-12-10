import React from 'react'
import SectionHeadings from '../SectionHeadings/SectionHeadings'
import Input from '../Input/Input'
import ErrorView from '../ErrorView/ErrorView'
import Button from '../Button/Button'

const Form = ({data}) => {

    const onSubmitFunc = (e) => {data && data?.map((item) => {
        item.formActions && item.formActions?.map((action) =>  action.onSubmit(e))
    })}

    return (
        <>
            <form className='flex gap-4 flex-col p-8 justify-center text-center bg-backgroundColour3 rounded-3xl hover:shadow-xl' onSubmit={onSubmitFunc}>
                {
                    data ? (
                        <>
                            {
                                data.map((item) => {
                                    if (item.formHeading) {
                                        return (
                                            <SectionHeadings
                                                key={item.formHeading}
                                                heading={item.formHeading}
                                                subHeading={item.formSubHeading}
                                            />
                                        )
                                    }
                                    if (item.formFields) {
                                        return (
                                            <div className='flex flex-col gap-4' key={item.formFields}>
                                                {
                                                    item.formFields.map((field) => {
                                                        return (
                                                            <Input
                                                                key={field.placeholder}
                                                                type={field.type}
                                                                placeholder={field.placeholder}
                                                                required={field.required}
                                                                disabled={field.disabled}
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                    if (item.formActions) {
                                        return (
                                            <div className='flex flex-col gap-4' key={item.formActions}>
                                                {
                                                    item.formActions.map((action) => {
                                                        if (action.type === 'submitButton') {
                                                            return (
                                                                <Button
                                                                    key={action.text}
                                                                    type={action.type}
                                                                    text={action.text}
                                                                    func={action.func}
                                                                    disabled={action.disabled}
                                                                />
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        )
                                    }

                                })
                            }
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
