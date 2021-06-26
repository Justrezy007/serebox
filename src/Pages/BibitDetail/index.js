import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';

const BibitDetail = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.exitButton}>
        <View style={styles.exitIcon} />
      </TouchableOpacity>
      <View style={styles.gambarBibit} />
      <Text style={styles.titleBibit}>Tomat</Text>
      <View style={styles.formBibit}>
        <Text style={styles.labelBibit}>Jumlah Benih</Text>
        <TextInput style={styles.input} keyboardType="number-pad" />
      </View>
      <View style={styles.formBibit}>
        <Text style={styles.labelBibit}>Expired</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity style={styles.submitBibit}>
        <Text style={styles.submitText}>TANAM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BibitDetail;

const styles = StyleSheet.create({
  page: {
    width: 300,
    marginTop: 100,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: 'orange',
  },
  gambarBibit: {
    width: '100%',
    height: 250,
    backgroundColor: 'green',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  titleBibit: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
  },
  formBibit: {
    marginTop: 18,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f1f1f1',
    color: '#545454',
    borderRadius: 8,
    width: 100,
    marginLeft: 20,
    textAlign: 'center',
    height: 38,
  },
  submitBibit: {
    backgroundColor: 'red',
    marginVertical: 28,
    marginHorizontal: 32,
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 6,
    fontWeight: 'bold',
  },
  exitIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#545454',
  },
});
