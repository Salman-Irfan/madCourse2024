import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Styling = () => {
    return (
        <SafeAreaView>
            <View>
                {/* inline styles, ot recommended */}
                {/* <Text style={
                    {
                        backgroundColor: 'green',
                        color: 'red',
                        fontSize: '100px',
                        fontWeight: 'bold'
                    }
                } >
                    Styling
                </Text> */}
            </View>
            {/* internal  styling*/}
            {/* <View >
                <Text style={[styles.textStyles, styles.boundary]}>text with internal styles</Text>
            </View> */}
        </SafeAreaView>
    )
}

export default Styling

const styles = StyleSheet.create({
    
})