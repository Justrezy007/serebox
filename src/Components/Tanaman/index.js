import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TanamanBenih, TanamanSiap, TanamanTumbuh} from '../../Resources';
import {colors} from "../../Utils"

const Tanaman = ({navigation,namaBenih, hari, kondisi}) => {
  return (
    <TouchableOpacity style={styles.plantContainer} onPress={()=>navigation.navigate("TanamanDetail")}>
        {hari > 3 ? (hari > 6 ? <Image source={TanamanSiap} style={styles.imagePlant} /> : <Image source={TanamanTumbuh} style={styles.imagePlant} />) : <Image style={styles.imagePlant} source={TanamanBenih} />}
      <View style={styles.plantDesciption}>
        <Text style={styles.plantType}>{namaBenih}</Text>
        <Text style={styles.plantCond}>{kondisi}</Text>
        <Text style={styles.plantProg}>Hari Ke - {hari}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tanaman;

const styles = StyleSheet.create({
  plantContainer: {
    justifyContent: 'center',
    marginHorizontal: 32,
    marginVertical: 10,
    flexDirection: 'row',
  },
  imagePlant: {
    width: 86,
    height: '100%',
    backgroundColor: colors.Primary,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  plantDesciption: {
    flex: 1,
    backgroundColor: colors.Dark,
    height: '100%',
    padding: 11,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  plantType: {
    fontSize: 18,
    color: colors.textPrime,
    fontWeight: 'bold',
  },
  plantCond: {
    marginTop: 4,
    color: colors.textSecond,
    fontSize: 14,
  },
  plantProg: {
    marginTop: 4,
    color: colors.textSecond,
    fontSize: 14,
  },
});
