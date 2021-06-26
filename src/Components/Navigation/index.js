import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Navigation = ({Navigation}) => {
    return (
        <View style={styles.navigationContainer}>
            <View style={styles.boxNav}>
                <TouchableOpacity onPress={()=>Navigation.replace('Menu')}>
                    <View style={styles.iconNav} />
                    <Text style={styles.textNav}>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxNav}>
                <TouchableOpacity onPress={()=>Navigation.replace('Home')}>
                    <View style={styles.iconNav} />
                    <Text style={styles.textNav}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxNav}>
                <TouchableOpacity>
                    <View style={styles.iconNav} />
                    <Text style={styles.textNav}>Artikel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    navigationContainer: {
        height: 64,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boxNav: {
        backgroundColor: "orange",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNav:{
        fontSize: 13,
        marginTop: 4,
        fontWeight: 'bold',
        color: '#0f0f0f',
    },
    iconNav: {
        width: 32,
        height: 32,
        backgroundColor: 'blue',
        alignSelf: "center"
    }
})
