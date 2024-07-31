import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from '@/components/lists/Item';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlatListComponent = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <SafeAreaView>

            <View style={{ backgroundColor: 'white' }}>
                <Text>FlatListComponent</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
                <Image
                    // style={styles.tinyLogo}
                    source={require('../../assets/images/react-logo.png')}
                />
            </View>
        </SafeAreaView>
    )
}

export default FlatListComponent

const styles = StyleSheet.create({})