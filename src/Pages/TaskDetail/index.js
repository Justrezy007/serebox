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
          Status: Detail.method[step - 1].Status,
        });

        setTimerData({
          hours: 0,
          minutes: 0,
          seconds: Detail.method[step - 1].Waktu,
        });
      });
  }, []);

  const handleDone = () => {
    setTanamanData({
      ...tanamanData,
      Status: 0,
    });
    FIREBASE.database()
      .ref('Tanaman/' + id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};

        FIREBASE.database()
          .ref('Tanaman/' + id)
          .update({
            gambar: data.gambar,
            jumlah: data.jumlah,
            kondisi: data.kondisi,
            medan: data.medan,
            method: data.method,
            nama: data.nama,
            totalStep: data.totalStep,
            updateStep: step,
          });

        FIREBASE.database()
          .ref('Tanaman/' + id + '/method/' + (step - 1))
          .update({
            Description: data.method[step - 1].Description,
            Step: data.method[step - 1].Step,
            Title: data.method[step - 1].Title,
            Waktu: data.method[step - 1].Waktu,
            isDone: true,
            isOpen: false,
          });

        if (data.method[step]) {
          FIREBASE.database()
            .ref('Tanaman/' + id + '/method/' + step)
            .update({
              Description: data.method[step].Description,
              Step: data.method[step].Step,
              Title: data.method[step].Title,
              Waktu: data.method[step].Waktu,
              isDone: false,
              isOpen: true,
            });
        }
      });
    

    FIREBASE.database().ref('BenihData').update({
      ...tanamanData,
      Status: 0,
    });
    BackgroundTimer.stopBackgroundTimer();
    navigation.navigate('Home');
  };

  const handleProto = () => {
    FIREBASE.database().ref('BenihData').update(tanamanData);
    setShowTimer(true);
    let time =
      timerData.hours * 3600 + timerData.minutes * 60 + timerData.seconds;
    BackgroundTimer.runBackgroundTimer(() => {
      if (time > 0) {
        time--;
        setTimerData({
          hours: Math.floor(time / 3600),
          minutes: Math.floor(time / 60) - Math.floor(time / 3600) * 60,
          seconds: time - ((Math.floor(time / 60) - Math.floor(time / 3600) * 60)*60)
        });
      } else {
        setIsDone(true);
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
              disabled={showTimer ? true : false}
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
