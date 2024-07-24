import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SignUpView = () => {
    return (
        <View>
            <Text>SignUpView</Text>
            <TextInput placeholder='Name'></TextInput>
            <TextInput placeholder='Email'></TextInput>
            <TextInput placeholder='Password'></TextInput>
            <Button title='SignUp'></Button>
        </View>
    )
}

export default SignUpView

const styles = StyleSheet.create({})