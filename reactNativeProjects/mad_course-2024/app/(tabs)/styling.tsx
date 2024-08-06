import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {flexStyles} from '../../styles/flexStyles'
import { Button } from 'react-native-paper'

const Styling = () => {
    return (
        // <SafeAreaView>
        <View style={flexStyles.parentBox}>
                {/* <View style={styles.childElement1}>
                    <Text style={{ color: 'white' }}>Item 1</Text>
                </View> */}
                {/* <View style={styles.childElement2}>
                    <Text style={{ color: 'white' }}>Item 2</Text>
                </View> */}
                {/* <View style={styles.childElement3}>
                    <Text style={{ color: 'white' }}>Item 3</Text>
                </View> */}
                <View style={flexStyles.childElement1}>
                    <Text style={{color: 'red'}}> item 1</Text>
                </View>
                <View style={flexStyles.childElement2}> 
                    <Text> item 2</Text>
                    <View style={flexStyles.secondFlex}>
                        <Text> inside 2nd flex</Text>
                    </View>
                </View>
                
            <View style={flexStyles.childElement3}>
                <Text style={{fontSize: 100}}> item 3</Text>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
            </View>
        // </SafeAreaView>
    )
}

export default Styling

