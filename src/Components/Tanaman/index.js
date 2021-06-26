import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Tanaman = ({namaBenih, hari, kondisi}) => {
    return (
        <TouchableOpacity style={styles.plantContainer}>
            <View style={styles.imagePlant} />
            <View style={styles.plantDesciption}>
                <Text style={styles.plantType}>{namaBenih}</Text>
                <Text style={styles.plantCond}>{kondisi}</Text>
                <Text style={styles.plantProg}>Hari Ke - {hari}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Tanaman

const styles = StyleSheet.create({
    plantContainer: {
        justifyContent: 'center',
        marginHorizontal: 32,
        marginVertical: 10,
        flexDirection: 'row'
    },
    imagePlant:{
        width: 86,
        height : "100%",
        backgroundColor: 'green',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    plantDesciption:{
        flex:1,
        backgroundColor:'#fafafa',
        height: "100%",
        padding: 11,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    plantType:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    plantCond:{
        marginTop: 4,
        fontSize: 14
    },  
    plantProg:{
        marginTop: 4,
        fontSize: 14
    }
})