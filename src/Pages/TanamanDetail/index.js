import React from 'react';
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

const TanamanDetail = ({navigation,route}) => {
  const {namaBenih, gambar, hari, totalHari, kondisi, jumlah, medan} = route.params;
  return (
    <View style={styles.wrapper}>
      <View style={styles.close}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.navigate('Home')}>
          <ArrowLeft style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Image style={styles.gambarBenih} source={gambar} />
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.detailTitle}>{namaBenih}</Text>
          <Text style={styles.detailStatus}>{kondisi}</Text>
          <Text style={styles.detailData}>{jumlah} benih</Text>
          <Text style={styles.detailData}>{medan} mT</Text>
        </View>
      </View>
      <ScrollView style={styles.page}>
        <Task day={1} time={30} medan={0.2} status="done" />
        <Task day={2} time={45} medan={0.2} status="pending" />
        <Task day={3} time={20} medan={0.2} status="pending" />
        <Task day={4} time={10} medan={0.2} status="pending" />
        <Task day={5} time={5} medan={0.2} status="pending" />
      </ScrollView>
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
  gambarBenih:{
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
