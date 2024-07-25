import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignInView = () => {
    return (
        <View>
            <Text>Email</Text>
            <Text>Password</Text>

            <Link href={''}>
                <Button title='Login' />
            </Link>
            {/* <anyOtherView/> */}
        </View>
    )
}

export default SignInView

const styles = StyleSheet.create({})