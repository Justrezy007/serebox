import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../Utils';
import {Clipboard, ArrowLeft} from '../../Resources';
import Task from '../../Components/Task';
import FIREBASE from '../../Config/FIREBASE';

const TanamanDetail = ({navigation, route}) => {
  const {id} = route.params;
  const [tanamanData, setTanamanData] = useState({});
  useEffect(() => {
    const ref = 'Tanaman/' + id;
    FIREBASE.database()
      .ref(ref)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let Detail = {...data};

        setTanamanData({Tanaman: Detail});
      });
  }, []);
  return (
    <View style={styles.wrapper}>
      {tanamanData.Tanaman ? (
        <View>
          <View style={styles.close}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.navigate('Home')}>
              <ArrowLeft style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.gambarBenih}
                source={tanamanData.Tanaman.gambar}
              />
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.detailTitle}>{tanamanData.Tanaman.nama}</Text>
              <Text style={styles.detailStatus}>
                {tanamanData.Tanaman.kondisi}
              </Text>
              <Text style={styles.detailData}>
                {tanamanData.Tanaman.jumlah} benih
              </Text>
              <Text style={styles.detailData}>
                {tanamanData.Tanaman.medan} mT
              </Text>
            </View>
          </View>
          <ScrollView>
            {tanamanData.Tanaman.method.map((step, i) => {
              return (
                <Task
                  key={i}
                  id={id}
                  step={step.Step}
                  time={step.Waktu}
                  isDone={step.isDone}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <Text>Wait</Text>
      )}
    </View>
  );
};

export default TanamanDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    width: '100%',
  },
  close: {
    backgroundColor: colors.background,
  },
  closeButton: {
    width: 32,
    height: 32,
    marginTop: 8,
    marginLeft: 24,
  },
  icon: {
    width: 128,
    height: 128,
    textAlign: 'center',
    color: colors.textPrime,
  },
  iconWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  detailWrapper: {
    flex: 1,
    marginLeft: 20,
  },
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  gambarBenih: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailTitle: {
    fontSize: 22,
    color: colors.textPrime,
    fontWeight: 'bold',
  },
  detailData: {
    marginTop: 4,
    color: colors.textSecond,
  },
  detailStatus: {
    fontSize: 16,
    marginVertical: 4,
    fontWeight: 'bold',
    color: colors.textSecond,
  },
});
