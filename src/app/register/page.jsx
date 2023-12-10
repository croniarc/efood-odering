'use client'
import { useState, useEffect } from 'react'
import Form from '@/components/Form/Form'
import PageContainer from '@/components/PageContainer/PageContainer'
import Card from '@/components/Card/Card'

const page = () => {
    const [formData, setFormData] = useState()
    const [cardData, setCardData] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Button Clicked')
    }
    useEffect(() => {
        setFormData({
            data : [
                {
                    formHeading: 'Register'
                },
                {
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
                    ]
                },
                {
                    formActions: [
                        {
                            type: 'submitButton',
                            text: 'Register',
                            onSubmit: handleSubmit,
                            disabled: (email && password)? false : true
                        }
                    ]
                }
            ]
        })
        setCardData({
            data: [
                {
                    subHeading: 'OR LOGIN',
                    type: 'linkButton',
                    link: 'login',
                    text: 'Login',
                }
            ]
        })
    }, [email, password])

    return (
        <>
            <PageContainer>
                <Form {...formData} />
                <Card {...cardData} />
            </PageContainer>
        </>
    )
}

export default page
