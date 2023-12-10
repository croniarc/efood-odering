'use client'
import { useState } from 'react'
import Form from '@/components/Form/Form'
import PageContainer from '@/components/PageContainer/PageContainer'
import Card from '@/components/Card/Card'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Button Clicked')
    }

    const data= {
            formHeading: 'Register',
            formFields: [
                {
                    type: 'email',
                    placeholder: 'Email',
                    required: true,
                    disabled: false,
                    value: email,
                    onChange: (e) => setEmail(e.target.value)
                },
                {
                    type: 'password',
                    placeholder: 'Password',
                    required: true,
                    disabled: false,
                    value: password,
                    onChange: (e) => setPassword(e.target.value)
                }
            ],
            formActions: [
                {
                    type: 'submitButton',
                    text: 'Register',
                    func: handleSubmit,
                    disabled: (email && password)? false : true
                }
            ],
            actions: [
                {
                    subHeading: 'OR LOGIN',
                    type: 'linkButton',
                    link: 'login',
                    text: 'Login',
                }
            ]
        }

    return (
        <>
            <PageContainer>
                <Form formData={data}/>
                <Card cardData={data.actions}/>
            </PageContainer>
        </>
    )
}

export default page
