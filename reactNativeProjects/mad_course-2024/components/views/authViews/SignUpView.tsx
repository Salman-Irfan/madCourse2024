import { ActivityIndicator, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const SignUpView = () => {
    const router = useRouter()
    const [name, setName] = useState(`salman`)
    const [email, setEmail] = useState(`salman@gmail.com`)
    const [password, setPassword] = useState(`Password`)
    const [loading, setLoading] = useState(false)
    // handleUserSignUp
    const handleUserSignUp = () => {
        setLoading(true)
        const userRegisterData = {
            name: name,
            email: email,
            password: password
        }
        console.log(userRegisterData)
        // assume login successful
        setTimeout(() => {
            router.push(`/explore/?name=salman&&email=${userRegisterData.email}`)
        }, 3000);
    }
    return (
        <View>
            <Text>SignUpView</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                >
                </TextInput>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                >
                </TextInput>
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                >
                </TextInput>
                <Button title='SignUp' onPress={handleUserSignUp}></Button>
            </KeyboardAvoidingView>
            {loading && <ActivityIndicator />}
        </View>
    )
}

export default SignUpView

const styles = StyleSheet.create({})