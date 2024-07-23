import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectThemeView from '@/components/views/settingsViews/SelectThemeView'
import SelectLanguageView from '@/components/views/settingsViews/SelectLanguageView'

const Settings = () => {
    return (
        <ScrollView style={styles.view}>
            <Text>Settings</Text>
            <Text>
                1. chnage theme
                1. choose language
                3. update profile
            </Text>
            <SelectThemeView/>
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
    }
})