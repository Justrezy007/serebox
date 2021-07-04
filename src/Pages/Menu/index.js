import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Navigation from '../../Components/Navigation';
import Bibit from '../../Components/Bibit';
import {useSelector} from 'react-redux';
import { colors } from '../../Utils';

const Menu = ({navigation}) => {
  const ListBenih = useSelector(state => state.BibitReducer.Benih);
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.menuContainer}>
          {ListBenih.map(benih => {
            return (
              <Bibit
                key={benih.id}
                navigation={navigation}
                nama={benih.nama}
                gambar={benih.gambar}
                medanNormal={benih.medanMagnetNormal}
                medanExpired={benih.medanMagnetExpired}
                jumlahHari={benih.jumlahHari}
                method={benih.method}
              />
            );
          })}
        </View>
      </ScrollView>
      <Navigation Navigation={navigation} target="menu" />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  menuContainer: {
    marginHorizontal: 18,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 64,
  },
});
