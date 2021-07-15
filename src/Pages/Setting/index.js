import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Navigation from '../../Components/Navigation';
import {colors} from '../../Utils';
import FIREBASE from '../../Config/FIREBASE';

const Setting = ({navigation}) => {
  const [Notification, setNotification] = useState(false);
  const [Cooler, setCooler] = useState(false);
  const [turn, setTurn] = useState({
    Buzzer: 0,
    Fan:0,
    LED:0,
    Relay:0,
    DarkTheme:0,
  })
  const [DarkTheme, setDarkTheme] = useState(false);

  useEffect(()=>{
    FIREBASE.database()
      .ref('Turn')
      .update(turn);

    console.log(turn);
  },[Notification,Cooler])

  const onInputChange = (value, input) => {

    setTurn({
      ...turn,
      [input]: value?1:0,
    });

    
  };
  
  const toggleDarkTheme = () => setDarkTheme(previousState => !previousState);
  return (
    <View style={styles.page}>
      <Text style={styles.titleSetting}>Setting Alat</Text>
      <View style={styles.listSetting}>
        <Text style={styles.textSetting}>Notifikasi</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.Secondary}}
          thumbColor={
            Notification ? colors.textPrime : colors.textSecond
          }
          ios_backgroundColor="#3e3e3e"
          onValueChange={value=>onInputChange(value,'LED')}
          value={turn.LED == 1? true:false}
        />
      </View>
      <View style={styles.listSetting}>
        <Text style={styles.textSetting}>Cooler</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.Secondary}}
          thumbColor={Cooler ? colors.textPrime : colors.textSecond}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value=>onInputChange(value,'Fan')}
          value={turn.Fan == 1? true:false}
        />
      </View>
      <View style={styles.listSetting}>
        <Text style={styles.textSetting}>Dark Theme</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.Secondary}}
          thumbColor={DarkTheme ? colors.textPrime : colors.textSecond}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value=>onInputChange(value,'DarkTheme')}
          value={turn.DarkTheme == 1? true:false}
        />
      </View>
      <Navigation Navigation={navigation} target="setting" />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleSetting: {
    fontSize: 24,
    color: colors.textPrime,
    marginTop: 16,
    marginHorizontal: 32,
    fontWeight: 'bold',
  },
  listSetting: {
    paddingTop: 24,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSetting: {
    color: colors.textPrime,
    fontSize: 18,
  },
  credit: {
    color: colors.textPrime,
  },
});
