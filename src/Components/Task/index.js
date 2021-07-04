import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../Utils';
import {Clipboard, CheckCircle} from '../../Resources';

const Task = ({day, time, medan, status}) => {
  return (
    <View style={styles.checkpoint}>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <View style={styles.status}>
            {status == 'done' ? (
              <CheckCircle style={styles.iconStatusDone} />
            ) : (
              <Clipboard style={styles.iconStatus} />
            )}
          </View>
          <Text style={styles.checkTitle}>Step {day}</Text>
        </View>
        <View>
          <Text style={styles.timeNeed}>{time} minutes</Text>
        </View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  checkpoint: {
    backgroundColor: colors.Dark,
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeNeed: {
    color: colors.textSecond,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconStatus: {
    color: colors.Secondary,
    width: 32,
    height: 32,
  },
  iconStatusDone: {
    color: colors.Primary,
    width: 32,
    height: 32,
  },
  checkTitle: {
    fontSize: 24,
    marginLeft: 18,
    fontWeight: 'bold',
    color: colors.textPrime,
  },
});
