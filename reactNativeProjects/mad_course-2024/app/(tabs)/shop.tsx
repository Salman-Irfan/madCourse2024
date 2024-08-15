import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const Shop = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // handleAddProduct
    const handleAddProduct = async () => {
        try {
            const docRef = await addDoc(collection(db, "shops"), {
                title: title,
                price: price,
                description: description,
            })
            console.log(docRef.id)
            if (docRef.id) {
                Alert.alert(`product added successfully with product Id: ${docRef.id}`);
            }
        } catch (error) {
            console.log(error)
            Alert.alert(`internal server error`)
        }

    };

    return (
        <SafeAreaView>
            <View >
                <Text>Shop</Text>
                {/* title start */}
                <TextInput
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                />
                {/* title end */}
                {/* Price start */}
                <TextInput
                    placeholder='Price'
                    keyboardType="numeric"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                {/* Price end */}
                {/* Description start */}
                <TextInput
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription}
                />
                {/* Description end */}
                <Button
                    title='Add Product'
                    onPress={handleAddProduct}
                />
            </View>
        </SafeAreaView>
    );
};

export default Shop;

const styles = StyleSheet.create({});
