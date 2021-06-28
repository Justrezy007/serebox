import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { color } from 'react-native-reanimated'
import {colors} from "../../Utils"

const Bibit = ({nama,gambar,navigation}) => {
    return (
        <TouchableOpacity style={styles.menuBibit} onPress={()=>navigation.navigate("BibitDetail")}>
            <Image style={styles.gambarBibit} source={gambar} />
            <Text style={styles.namaBibit}>{nama}</Text>
        </TouchableOpacity>
    )
}

export default Bibit

const styles = StyleSheet.create({
    menuBibit:{
        width: 120,
        backgroundColor: colors.Dark,
        borderRadius: 8,
        margin: 16
    },
    gambarBibit:{
        backgroundColor: colors.Primary,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        width: "100%",
        height: 64,
    },
    namaBibit:{
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 6,
        fontWeight: 'bold',
        color: colors.textPrime,
        fontSize: 14,
        lineHeight: 18
    }
})