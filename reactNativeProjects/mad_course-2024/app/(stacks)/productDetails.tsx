import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const ProductDetails = () => {
    const router = useRouter(); // Use the useRouter hook
    const [productDetails, setProductDetails] = useState<any>(null);
    const { productId } = useLocalSearchParams(); // object destructuring

    console.log('Product ID:', productId); // Ensure productId is correctly retrieved

    const fetchProductDetails = async () => {
        if (productId) {
            const productDocRef = doc(db, 'shops', productId as string);
            const productDocSnapshot = await getDoc(productDocRef);

            if (productDocSnapshot.exists()) {
                const data = productDocSnapshot.data();
                console.log('Fetched Data:', data); // Log the fetched data
                setProductDetails(data);
            } else {
                console.log('Product not found');
            }
        } else {
            console.log('Product ID is undefined');
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    useEffect(() => {
        console.log('Updated Product Details:', productDetails); // Log whenever productDetails changes
    }, [productDetails]);

    const handleProductDelete = async (productId: any) => {
        const productDocRef = doc(db, 'shops', productId);
        await deleteDoc(productDocRef);
        alert('Product deleted successfully');
        router.back()
    }

    return (
        <SafeAreaView>
            <View>
                <Text>ProductDetails</Text>
                <Text>ID: {productId}</Text>
                {productDetails ? (
                    <View>
                        <Text>Title: {productDetails.title}</Text>
                        <Text>Price: {productDetails.price}</Text>
                        <Text>Description: {productDetails.description}</Text>
                        {/* action buttons */}
                        <Button title='Delete' onPress={() => handleProductDelete(productId)} />
                    </View>
                ) : (
                    <Text>Loading product details...</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({});
