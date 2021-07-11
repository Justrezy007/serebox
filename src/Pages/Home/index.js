import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Navigation from '../../Components/Navigation';
import Tanaman from '../../Components/Tanaman';
import {useSelector} from 'react-redux';
import {colors} from '../../Utils';
import FIREBASE from '../../Config/FIREBASE';

const Home = ({navigation}) => {
  const [listTanaman, setListTanaman] = useState({});
  const [keyTanaman, setKeyTanaman] = useState({});
  useEffect(() => {
    FIREBASE.database()
      .ref('Tanaman')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let TanamanData = {...data};

        setListTanaman({Tanaman: TanamanData});
        setKeyTanaman({Key: Object.keys(TanamanData)});
      });
  }, []);
  const ListTanaman = useSelector(state => state.TanamanReducer.Tanaman);
  return (
    <View style={styles.page}>
      <ScrollView style={styles.tanamanContainer}>
        {keyTanaman.Key ? (
          keyTanaman.Key.map(list => {
            return (
              <Tanaman
                key={list}
                id={list}
                navigation={navigation}
                namaBenih={listTanaman.Tanaman[list].nama}
                gambar={listTanaman.Tanaman[list].gambar}
                updateStep={listTanaman.Tanaman[list].updateStep}
                totalStep={listTanaman.Tanaman[list].totalStep}
                kondisi={listTanaman.Tanaman[list].kondisi}
                jumlah={listTanaman.Tanaman[list].jumlah}
                medan={listTanaman.Tanaman[list].medan}
                method={listTanaman.Tanaman[list].method}
              />
            );
          })
        ) : (
          <Text>Silahkan menambahkan tanaman di menu!</Text>
        )}
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
