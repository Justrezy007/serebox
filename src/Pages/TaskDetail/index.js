import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {ArrowLeft} from '../../Resources';
import {colors} from '../../Utils';
import FIREBASE from '../../Config/FIREBASE';

const TaskDetail = ({route, navigation}) => {
  const {id, step} = route.params;
  const [methodData, setMethodData] = useState({});
  useEffect(() => {
    const ref = 'Tanaman/' + id+'/method'+'/'+(step-1);
    FIREBASE.database()
      .ref(ref)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let Detail = {...data};

        setMethodData({Method: Detail});
        console.log(methodData.Method)
      });
  }, []);
  return (
    <View style={styles.page}>
      {methodData.Method ? (
        <View>
        <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.navigate('TanamanDetail',{id:id})}>
          <ArrowLeft style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.nav}>Step {step}</Text>
      </View>
      <View>
        <Text style={styles.title}>{methodData.Method.Title}</Text>
        <Text style={styles.description}>{methodData.Method.Description}</Text>
        {methodData.Method.isDone ? (
          <TouchableOpacity style={styles.buttonCount}><Text style={styles.textButton}>MULAI</Text></TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonCountDisabled} disabled={true}><Text style={styles.textButton}>MULAI</Text></TouchableOpacity>
        )}
      </View>
      </View>
      ):(<Text>Wait</Text>)}
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
  title:{
      fontSize: 21,
      color: colors.textPrime,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 24,
      lineHeight: 27
  },
  description:{
      color: colors.textSecond,
      margin: 24,
      fontSize: 16,
      lineHeight: 24
  },
  buttonCount:{
    alignSelf:'center',
    backgroundColor: colors.Secondary,
    paddingVertical: 8,
    paddingHorizontal:18,
    borderRadius: 6
  },
  buttonCountDisabled:{
    alignSelf:'center',
    backgroundColor: '#E4E6E8',
    paddingVertical: 8,
    paddingHorizontal:18,
    borderRadius: 6
  },
  textButton:{
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.textPrime,
      elevation: 3
  }
});

export default TaskDetail;
