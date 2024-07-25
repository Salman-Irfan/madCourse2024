import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelectThemeView from '@/components/views/settingsViews/SelectThemeView'
import SelectLanguageView from '@/components/views/settingsViews/SelectLanguageView'
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
import { PRODUCT_OWNER as PRODUCT_OWNER_ABC } from '@/constants/ownerAbc'
import { PRODUCT_OWNER as PRODUCT_OWNER_XYZ } from '@/constants/ownerXyz'

const Settings = () => {
    // state variables
    const [counter, setCounter] = useState(1234)
    // let counter = 1234
    // console.log(counter)

    const handleAddCounter = () => {
        // console.log(counter)
        // counter++
        setCounter(counter + 1)
    }

    // handleDecrementCount
    const handleDecrementCount = () => {
        setCounter(counter - 1)
        console.log(`long press func got called`)
    }
    // callDoubeTap
    const callDoubeTap = () => {
        console.log(`double tap pressed`)
        setCounter(counter * 2)
    }
    return (


        <ScrollView style={styles.view}>
            <Text>Settings
                {PRODUCT_OWNER_ABC}
                {PRODUCT_OWNER_XYZ}
            </Text>
            <Text>
                1. chnage theme
                1. choose language
                3. update profile
            </Text>
            <Button
                title='add counter'
                onPress={handleAddCounter}
            />
            <Text>
                {counter}
            </Text>
            <Pressable
                style={styles.longPressButton}
                onLongPress={handleDecrementCount}
                onPressIn={() => { console.log(`press in got called`) }}
                onPressOut={() => { console.log(`press out got called`) }}
            >
                <Text>Decrement the counter</Text>
            </Pressable>

            {/* double tap */}
            <GestureHandlerRootView>
                <TapGestureHandler
                    numberOfTaps={2}
                    onActivated={callDoubeTap}
                >
                    <Text> Check Double tap</Text>
                </TapGestureHandler>
            </GestureHandlerRootView>
            <SelectThemeView />
            <SelectLanguageView />
            
            
        </ScrollView>

    )
}

export default Settings

const styles = StyleSheet.create({
    view: {
        // display: 'flex',
        backgroundColor: 'white',
        // justifyContent: 'center',
    },
    longPressButton: {
        backgroundColor: 'lightgreen',
        padding: 10,
    }
})