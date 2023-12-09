import React from 'react'
import Form from '@/components/Form/Form'
import Card from '@/components/Card/Card'
const login = () => {
    const formData= {
            formHeading: 'Login',
            formFields: [
                {
                    type: 'email',
                    placeholder: 'Email',
                    required: true,
                    disabled: false,
                },
                {
                    type: 'password',
                    placeholder: 'Password',
                    required: true,
                    disabled: false,
                }
            ],
            formActions: [
                {
                    type: 'submitButton',
                    bText: 'Submit Button',
                    func: () => console.log('Submit Button Clicked'),
                }
            ]
        }
    

    return (
        <>
            <section className='flex justify-center items-center flex-col w-screen h-screen'>
                <Form formData={formData}/>
            </section>
        </>

    )
}

export default login
