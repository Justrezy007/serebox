import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Navigation from '../../Components/Navigation';
import Tanaman from '../../Components/Tanaman';
import {useSelector} from 'react-redux';
import { colors } from '../../Utils';

const Home = ({navigation}) => {
  const ListTanaman = useSelector(state => state.TanamanReducer.Tanaman);
  return (
    <View style={styles.page}>
      <ScrollView style={styles.tanamanContainer}>
        {ListTanaman.map(tanaman => {
          return (
            <Tanaman
              key={tanaman.id}
              id={tanaman.id}
              navigation={navigation}
              namaBenih={tanaman.nama}
              gambar={tanaman.gambar}
              hari={tanaman.updateHari}
              totalHari={tanaman.totalHari}
              kondisi={tanaman.kondisi}
              jumlah={tanaman.jumlah}
              medan={tanaman.medan}
              method={tanaman.method}
            />
          );
        })}
      </ScrollView>
      <Navigation Navigation={navigation} target="home" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  tanamanContainer: {
    paddingTop: 10,
    marginBottom: 64,
  },
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
