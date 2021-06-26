import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Navigation from "../../Components/Navigation"
import Tanaman from "../../Components/Tanaman"

const Home = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ScrollView style={styles.tanamanContainer}>
                <Tanaman namaBenih="Tomat" hari="2" kondisi="Baru" />
                <Tanaman namaBenih="Cabai" hari="5" kondisi="Expired" />
                <Tanaman namaBenih="Melon" hari="7" kondisi="Baru" />
                <Tanaman namaBenih="Semangka" hari="3" kondisi="Expired" />
                <Tanaman namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
                <Tanaman namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
                <Tanaman namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
                <Tanaman namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
                <Tanaman namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
            </ScrollView>
            <Navigation Navigation={navigation} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    tanamanContainer:{
        paddingTop: 10,
        marginBottom: 64
    },
    page:{
        flex: 1,
        backgroundColor:'#f1f1f1'
    }
})
