import React,{useEffect, useState} from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import {colors} from '../../Utils';
import FIREBASE  from '../../Config/FIREBASE';

const Benefit = ({route}) => {
    const {id} = route.params;
    const [manfaat,setManfaat] = useState({});

    useEffect(() => {
        const ref = 'Tanaman/' + id +'/manfaat';
        FIREBASE.database()
          .ref(ref)
          .once('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let Detail = {...data};
            setManfaat({Manfaat: Detail});
          });
      }, []);

    return (
        <View style={styles.manfaatContainer}>
            <Text style={styles.header}>Manfaat Yang Diperoleh</Text>
            {manfaat.Manfaat ? 
            <FlatList 
                data={[
                    {key: manfaat.Manfaat[0] ? manfaat.Manfaat[0] : ""},
                    {key: manfaat.Manfaat[1] ? manfaat.Manfaat[1] : ""},
                    {key: manfaat.Manfaat[2] ? manfaat.Manfaat[2] : ""},
                    {key: manfaat.Manfaat[3] ? manfaat.Manfaat[3] : ""},
                ]}
                renderItem={({item})=><Text style={(item.key == "") ? styles.listHidden : styles.list}><View style={styles.decoration}/>{item.key}</Text>}
            />
            : <Text>Wait</Text>
            }
        </View>
    )
}

export default Benefit

const styles = StyleSheet.create({
    manfaatContainer:{
        flex: 1,
        backgroundColor: colors.background,
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16
    },  
    list:{
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 18,
        marginTop: 15,
        lineHeight: 22,
        marginHorizontal: 28,
        backgroundColor: colors.Dark,
        color: colors.textPrime
        
    },
    listHidden:{
        backgroundColor: colors.background
    }
})
