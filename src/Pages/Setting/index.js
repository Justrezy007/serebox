import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navigation from "../../Components/Navigation"
import {colors} from "../../Utils"

const Setting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.creator}>
                <Text style={styles.credit}>Created by: @talktorey</Text>                
            </View>
            <Navigation Navigation={navigation} target="setting" />
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.background
    },
    creator:{
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    credit:{
        color: colors.textPrime
    }
})