import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { color } from 'react-native-reanimated';
import {Exit, ShoppingBag, Clock, Plus} from '../../Resources';
import {colors} from "../../Utils"

const BibitDetail = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.background}>
      <View style={styles.page}>
        <TouchableOpacity style={styles.exitButton} onPress={()=> navigation.replace("Menu")}>
          <Exit style={styles.exitIcon} />
        </TouchableOpacity>
        <Text style={styles.titleBibit}>Tomat</Text>
        <View style={styles.formBibit}>
          <ShoppingBag style={styles.labelInput} />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Jumlah Benih"
          />
        </View>
        <View style={styles.formBibit}>
          <View style={styles.labelExpired}>
            <Clock style={styles.labelInput} />
            <Text style={styles.labelBibit}>Expired</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: colors.Secondary}}
            thumbColor={isEnabled ? colors.textPrime : colors.textSecond}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity style={styles.submitBibit}>
          <Plus style={styles.submitIcon} />
          <Text style={styles.submitText}>TANAM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BibitDetail;

const styles = StyleSheet.create({
  background:{
    flex: 1 ,
    backgroundColor: colors.Primary,
    justifyContent: "center",
    alignContent: "center"
  },
  page: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: colors.background,
  },
  titleBibit: {
    fontSize: 24,
    color: colors.textPrime,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
  },
  formBibit: {
    marginTop: 18,
    marginHorizontal: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelBibit: {
    color: colors.textSecond,
    marginLeft: 8
  },
  labelInput: {
    width: 32,
    height: 32,
    color: colors.textSecond,
  },
  labelExpired:{
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  input: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: colors.Border,
    color: colors.textPrime,
    borderRadius: 8,
    width: 128,
    marginLeft: 20,
    textAlign: 'left',
    height: 38,
    paddingHorizontal: 16,
  },
  submitBibit: {
    backgroundColor: colors.Secondary,
    marginVertical: 28,
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  submitText: {
    textAlign: 'center',
    color: colors.textPrime,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontWeight: 'bold',
  },
  submitIcon:{
    marginLeft: 16,
    color: colors.textPrime,
    width: 16,
    height: 16
  },
  exitIcon: {
    width: 32,
    height: 32,
    margin: 16,
    color: colors.textSecond,
  },
});
