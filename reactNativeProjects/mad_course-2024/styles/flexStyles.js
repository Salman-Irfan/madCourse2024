import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
    parentBox: {
        flex: 1,
        backgroundColor: 'brown',
        flexDirection: 'row'
    },
    childElement1: {
        flex: 1,
        backgroundColor: 'blue'
    },
    childElement2: {
        flex: 1,
        backgroundColor: 'green'
    },
    childElement3: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    secondFlex: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 40
    }
})