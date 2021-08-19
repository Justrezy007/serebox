import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../../Utils';

const Bibit = ({nama, gambar, medanNormal, medanExpired, jumlahHari, method, navigation, manfaat}) => {
  return (
    <TouchableOpacity
      style={styles.menuBibit}
      onPress={() => navigation.navigate('BibitDetail',{
        nama: nama,
        gambar: gambar,
        medanNormal: medanNormal,
        medanExpired: medanExpired,
        jumlahHari: jumlahHari,
        method: method,
        manfaat:manfaat
      })}>
      <Image style={styles.gambarBibit} source={gambar} />
      <Text style={styles.namaBibit}>{nama}</Text>
    </TouchableOpacity>
  );
};

export default Bibit;

const styles = StyleSheet.create({
  menuBibit: {
    width: 120,
    backgroundColor: colors.Dark,
    borderRadius: 8,
    margin: 16,
  },
  gambarBibit: {
    backgroundColor: colors.Primary,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: 64,
  },
  namaBibit: {
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 6,
    fontWeight: 'bold',
    color: colors.textPrime,
    fontSize: 14,
    lineHeight: 18,
  },
});
