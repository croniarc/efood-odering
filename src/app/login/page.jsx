"use client"
import {useState} from 'react'
import Form from '@/components/Form/Form'
import Card from '@/components/Card/Card'
import PageContainer from '@/components/PageContainer/PageContainer'
const login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Button Clicked')
    }

    const data= {
            formHeading: 'Login',
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
                    text: 'Login',
                    func: handleSubmit,
                    disabled: (email && password)? false : true
                }
            ],
            actions: [
                {
                    subHeading: 'OR LOGIN WITH',
                    type: 'secondaryButton',
                    text: 'Google',
                },
                {
                    subHeading: 'OR',
                    type: 'linkButton',
                    link: 'register',
                    text: 'Register',
                }
            ]
        }
    
    return (
        <>
            <PageContainer hCenter={true}>
                <Form formData={data}/>
                <Card cardData={data.actions}/>
            </PageContainer>
        </>

    )
}

export default login
