import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Navigation from '../../Components/Navigation';
import {colors} from '../../Utils';

const Setting = ({navigation}) => {
  const [Notification, setNotification] = useState(false);
  const [Cooler, setCooler] = useState(false);
  const [DarkTheme, setDarkTheme] = useState(false);
  const toggleNotification = () =>
    setNotification(previousState => !previousState);
  const toggleCooler = () => setCooler(previousState => !previousState);
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
          onValueChange={toggleNotification}
          value={Notification}
        />
      </View>
      <View style={styles.listSetting}>
        <Text style={styles.textSetting}>Cooler</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.Secondary}}
          thumbColor={Cooler ? colors.textPrime : colors.textSecond}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleCooler}
          value={Cooler}
        />
      </View>
      <View style={styles.listSetting}>
        <Text style={styles.textSetting}>Dark Theme</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.Secondary}}
          thumbColor={DarkTheme ? colors.textPrime : colors.textSecond}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkTheme}
          value={DarkTheme}
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
