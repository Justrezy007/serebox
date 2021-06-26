import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Navigation from "../../Components/Navigation"
import Bibit from "../../Components/Bibit"

const Menu = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ScrollView>
            <View style={styles.menuContainer}>
                <Bibit nama="Tomat" />
                <Bibit nama="Cabai" />
                <Bibit nama="Melon" />
                <Bibit nama="Semangka" />
                <Bibit nama="Bawang Merah" />
                <Bibit nama="Kacang Panjang" />
                <Bibit nama="Jagung" />
                <Bibit nama="Labu" />
                <Bibit nama="Timun" />
                <Bibit nama="Kangkung" />
                <Bibit nama="Bayam" />
                <Bibit nama="Kedelai" />
            </View>
            </ScrollView>
            <Navigation Navigation={navigation} />
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor:'#f1f1f1'
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
