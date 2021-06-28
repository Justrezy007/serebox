import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Navigation from "../../Components/Navigation"
import Bibit from "../../Components/Bibit"
import {BawangMerah,
    Cabai,
    Jagung,
    Kedelai,
    Melon,
    Padi,
    Semangka,
    TanamanBenih,
    TanamanSiap,
    TanamanTumbuh,
    Timun,
    Tomat} from "../../Resources"

const Menu = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ScrollView>
            <View style={styles.menuContainer}>
                <Bibit navigation={navigation} nama="Tomat" gambar={Tomat} />
                <Bibit navigation={navigation} nama="Cabai" gambar={Cabai} />
                <Bibit navigation={navigation} nama="Melon" gambar={Melon} />
                <Bibit navigation={navigation} nama="Semangka" gambar={Semangka} />
                <Bibit navigation={navigation} nama="Bawang Merah" gambar={BawangMerah} />
                <Bibit navigation={navigation} nama="Kacang Panjang" gambar={Kedelai} />
                <Bibit navigation={navigation} nama="Jagung" gambar={Jagung} />
                <Bibit navigation={navigation} nama="Labu" gambar={Melon} />
                <Bibit navigation={navigation} nama="Timun" gambar={Timun} />
                <Bibit navigation={navigation} nama="Padi" gambar={Padi} />
                <Bibit navigation={navigation} nama="Bayam" gambar={TanamanTumbuh} />
                <Bibit navigation={navigation} nama="Kedelai" gambar={Kedelai} />
            </View>
            </ScrollView>
            <Navigation Navigation={navigation} target="menu" />
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor:'#181818'
    },
    menuContainer:{
        marginHorizontal: 18,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 64
    }
})
