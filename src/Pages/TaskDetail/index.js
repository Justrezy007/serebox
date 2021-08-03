import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ArrowLeft} from '../../Resources';
import {colors} from '../../Utils';
import FIREBASE from '../../Config/FIREBASE';
import BackgroundTimer from 'react-native-background-timer';

const TaskDetail = ({route, navigation}) => {
  const {id, step} = route.params;
  const [timerData, setTimerData] = useState({});
  const [showTimer, setShowTimer] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [methodData, setMethodData] = useState({});
  const [tanamanData, setTanamanData] = useState({
    Durasi: 0,
    Kondisi: 0,
    Medan: 0,
    Nama: 1,
    Status: 1,
  });
  const handleNama = nama => {
    switch (nama) {
      case 'Tomat':
        return 1;
        break;
      case 'Cabai':
        return 2;
        break;
      case 'Melon':
        return 3;
        break;
      case 'Semangka':
        return 4;
        break;
      case 'Bawang Merah':
        return 5;
        break;
      case 'Kedelai':
        return 6;
        break;
      case 'Jagung':
        return 7;
        break;
      case 'Padi':
        return 8;
        break;
      case 'Timun':
        return 9;
        break;
    }
  };

  useEffect(() => {
    FIREBASE.database()
      .ref('Tanaman/' + id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let Detail = {...data};
        let firebaseMethod = Detail.method[step - 1];

        setMethodData({Method: firebaseMethod});
        setTanamanData({
          Durasi: Detail.method[step - 1].Waktu,
          Kondisi: Detail.kondisi == 'baru' ? 0 : 1,
          Medan: Detail.medan,
          Nama: handleNama(Detail.nama),
          Status: 1,
        });
        setTimerData({
          hours: 0,
          minutes: Detail.method[step - 1].Waktu,
          seconds: 0,
        });
      });
  }, []);

  const handleDone = () => {
    console.log('done');
  };

  const handleProto = () => {
    FIREBASE.database().ref('BenihData').update(tanamanData);
    setShowTimer(true);
    let time =
      timerData.hours * 3600 + timerData.minutes * 60 + timerData.seconds;
    BackgroundTimer.runBackgroundTimer(() => {
      if (time > 0) {
        time--;
        let hour = Math.floor(time / 3600);
        let minute = Math.floor(time / 60) - hour * 60;
        let second = Math.floor(time / 1) - hour * 3600 - minute * 60;
        setTimerData({
          hours: hour,
          minutes: minute,
          seconds: second,
        });
        console.log(time);
      } else {
        setIsDone(true);
        BackgroundTimer.stopBackgroundTimer();
      }
    }, 1000);
  };
  return (
    <View style={styles.page}>
      {methodData.Method ? (
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.navigate('TanamanDetail', {id: id})}>
              <ArrowLeft style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.nav}>Step {step}</Text>
          </View>
          <View>
            <Text style={styles.title}>{methodData.Method.Title}</Text>
            <Text style={styles.description}>
              {methodData.Method.Description}
            </Text>
            {showTimer ? (
              <View style={styles.timer}>
                <Text style={styles.timerNumber}>
                  {timerData.minutes < 10
                    ? '0' + timerData.minutes
                    : timerData.minutes}
                  :
                  {timerData.seconds < 10
                    ? '0' + timerData.seconds
                    : timerData.seconds}
                </Text>
              </View>
            ) : null}

            {methodData.Method.isOpen ? (
              showTimer ? (
                <TouchableOpacity
                  style={
                    isDone ? styles.buttonCount : styles.buttonCountDisabled
                  }>
                  <Text
                    style={styles.textButton}
                    onPress={handleDone}
                    disabled={isDone ? false : true}>
                    SELESAI
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.buttonCount}>
                  <Text
                    style={styles.textButton}
                    onPress={handleProto}
                    disabled={false}>
                    MULAI
                  </Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                style={styles.buttonCountDisabled}
                disabled={true}>
                <Text style={styles.textButton}>MULAI</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <Text>Wait</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  nav: {
    fontSize: 22,
    margin: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    width: 32,
    height: 32,
    marginTop: 16,
    marginLeft: 24,
  },
  icon: {
    color: colors.textPrime,
  },
  title: {
    fontSize: 21,
    color: colors.textPrime,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 24,
    lineHeight: 27,
  },
  description: {
    color: colors.textSecond,
    margin: 24,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonCount: {
    alignSelf: 'center',
    backgroundColor: colors.Secondary,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  buttonCountDisabled: {
    alignSelf: 'center',
    backgroundColor: '#E4E6E8',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrime,
    elevation: 3,
  },
  timer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  timerNumber: {
    fontSize: 42,
  },
});

export default TaskDetail;
