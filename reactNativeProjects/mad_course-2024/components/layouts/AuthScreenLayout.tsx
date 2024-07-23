import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthScreenLayout = (props:any) => {
    console.log(props.children)
    return (
        <View style={styles.main}>
            {props.children[0]}
            <Text>Display some kind Lock</Text>
            {props.children[1]}
        </View>
    )
}

export default AuthScreenLayout

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        marginTop: 20,
    }
})