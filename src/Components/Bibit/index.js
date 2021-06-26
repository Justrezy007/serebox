import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Bibit = ({nama}) => {
    return (
        <TouchableOpacity style={styles.menuBibit}>
            <View style={styles.gambarBibit} />
            <Text style={styles.namaBibit}>{nama}</Text>
        </TouchableOpacity>
    )
}

export default Bibit

const styles = StyleSheet.create({
    menuBibit:{
        width: 90,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        margin: 12
    },
    gambarBibit:{
        backgroundColor: 'green',
        borderTopRightRadius: 8,
        borderTopStartRadius: 8,
        width: "100%",
        height: 64,
    },
    namaBibit:{
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 6,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18
    }
})