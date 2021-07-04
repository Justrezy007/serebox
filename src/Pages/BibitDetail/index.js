import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Exit, ShoppingBag, Clock, Plus} from '../../Resources';
import {colors} from '../../Utils';

const BibitDetail = ({route, navigation}) => {
  const Tanaman = useSelector(state => state.TanamanReducer.Tanaman);
  const dispatch = useDispatch();
  const {nama, gambar, medanNormal, medanExpired, jumlahHari, method} = route.params;
  const [form, setForm] = useState({
    nama: nama,
    gambar: gambar,
    medan: medanNormal,
    jumlahHari: jumlahHari,
    method: method,
    jumlahBenih: "",
    expired: false,
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  const toggleSwitch = (value, input) => {
    if (value == false) {
      setForm({
        ...form,
        [input]: false,
        medan: medanNormal,
      });
    } else {
      setForm({
        ...form,
        [input]: true,
        medan: medanExpired,
      });
    }
  };
  const submitData = () => {
    const data = {
      nama: form.nama,
      gambar: form.gambar,
      medan: form.medan,
      jumlahHari: jumlahHari,
      method: method,
      jumlahBenih: parseInt(form.jumlahBenih),
      kondisi: form.expired ? 'Expired' : 'Baru',
    };
    console.log(Tanaman);
    dispatch({
      type: 'SET_FORM',
      inputNama: data.nama,
      inputGambar: data.gambar,
      inputMedan: data.medan,
      inputJumlahHari: data.jumlahHari,
      inputMethod: data.method,
      inputBenih: data.jumlahBenih,
      inputKondisi: data.kondisi,
    });
    navigation.replace('Home');
  };
  return (
    <View style={styles.background}>
      <View style={styles.page}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate('Menu')}>
          <Exit style={styles.exitIcon} />
        </TouchableOpacity>
        <Text style={styles.titleBibit}>{nama}</Text>
        <View style={styles.formBibit}>
          <ShoppingBag style={styles.labelInput} />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Jumlah Benih"
            placeholderTextColor={colors.textSecond}
            value={form.jumlahBenih}
            onChangeText={value => onInputChange(value, 'jumlahBenih')}
          />
        </View>
        <View style={styles.formBibit}>
          <Clock style={styles.labelInput} />
          <View style={styles.labelExpired}>
            <Text style={styles.labelBibit}>Expired</Text>
            <Switch
              trackColor={{false: '#767577', true: colors.Secondary}}
              thumbColor={form.expired ? colors.textPrime : colors.textSecond}
              ios_backgroundColor="#3e3e3e"
              onValueChange={value => toggleSwitch(value, 'expired')}
              value={form.expired}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitBibit} onPress={submitData}>
          <Plus style={styles.submitIcon} />
          <Text style={styles.submitText}>TANAM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BibitDetail;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.Secondary,
    justifyContent: 'center',
    alignContent: 'center',
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
    marginLeft: 8,
  },
  labelInput: {
    width: 32,
    height: 32,
    color: colors.textSecond,
  },
  labelExpired: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 20,
  },
  input: {
    backgroundColor: colors.Dark,
    borderWidth: 1,
    borderColor: colors.textSecond,
    color: colors.textPrime,
    borderRadius: 8,
    width: 128,
    marginLeft: 20,
    textAlign: 'left',
    height: 38,
    paddingHorizontal: 16,
  },
  submitBibit: {
    backgroundColor: colors.Primary,
    marginVertical: 28,
    marginHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  submitIcon: {
    marginLeft: 16,
    color: colors.textPrime,
    width: 16,
    height: 16,
  },
  exitIcon: {
    width: 32,
    height: 32,
    margin: 16,
    color: colors.textSecond,
  },
});
