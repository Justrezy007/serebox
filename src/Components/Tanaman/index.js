import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TanamanBenih, TanamanSiap, TanamanTumbuh} from '../../Resources';
import {colors} from '../../Utils';
import FIREBASE from '../../Config/FIREBASE';

const Tanaman = ({navigation, id, updateStep}) => {
  const [tanaman, setTanaman] = useState({});

  useEffect(() => {
    FIREBASE.database()
      .ref('Tanaman/' + id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let DataTanaman = {...data};
        setTanaman(DataTanaman);
      });
  }, [tanaman.updateStep]);

  return (
    <TouchableOpacity
      style={styles.plantContainer}
      onPress={() =>
        navigation.navigate('TanamanDetail', {
          id: id,
        })
      }>
      {tanaman.updateStep > 3 ? (
        tanaman.updateStep > 6 ? (
          <Image source={TanamanSiap} style={styles.imagePlant} />
        ) : (
          <Image source={TanamanTumbuh} style={styles.imagePlant} />
        )
      ) : (
        <Image style={styles.imagePlant} source={TanamanBenih} />
      )}
      {tanaman.method ? (
        <View style={styles.plantDesciption}>
          <Text style={styles.plantType}>{tanaman.nama}</Text>
          <Text style={styles.plantCond}>{tanaman.kondisi}</Text>
          <Text style={styles.plantProg}>Step Ke {tanaman.updateStep}</Text>
        </View>
      ) : null}
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
    paddingLeft: 18,
    paddingVertical: 11,
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
