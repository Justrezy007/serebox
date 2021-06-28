import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Navigation from "../../Components/Navigation"
import Tanaman from "../../Components/Tanaman"

const Home = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ScrollView style={styles.tanamanContainer}>
                <Tanaman navigation={navigation} namaBenih="Tomat" hari="2" kondisi="Baru" />
                <Tanaman navigation={navigation} namaBenih="Cabai" hari="5" kondisi="Expired" />
                <Tanaman navigation={navigation} namaBenih="Melon" hari="7" kondisi="Baru" />
                <Tanaman navigation={navigation} namaBenih="Semangka" hari="3" kondisi="Expired" />
                <Tanaman navigation={navigation} namaBenih="Bawang Merah" hari="12" kondisi="Expired" />
                <Tanaman navigation={navigation} namaBenih="Jagung" hari="3" kondisi="Baru" />
                <Tanaman navigation={navigation} namaBenih="Kedelai" hari="2" kondisi="Baru" />
                <Tanaman navigation={navigation} namaBenih="Timun" hari="1" kondisi="Baru" />
                <Tanaman navigation={navigation} namaBenih="Kacang Panjang" hari="1" kondisi="Baru" />
            </ScrollView>
            <Navigation Navigation={navigation} target="home" />
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
        backgroundColor:'#181818'
    }
})
