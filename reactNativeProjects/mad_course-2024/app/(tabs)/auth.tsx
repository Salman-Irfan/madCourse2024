import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthScreenLayout from '@/components/layouts/AuthScreenLayout'
import SignUpView from '@/components/views/authViews/SignUpView'
import SignInView from '@/components/views/authViews/SignInView'

const Auth = () => {
    return (
        <AuthScreenLayout>
            <SignUpView/>
            <SignInView/>
        </AuthScreenLayout>
    )
}

export default Auth

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        marginTop: 20,
    }
})