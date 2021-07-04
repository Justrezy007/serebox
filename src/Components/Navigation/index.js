import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
    Home,
    PlusSquare,
    Setting,
  } from "../../Resources"
import {colors} from "../../Utils"
  

const Navigation = ({target,Navigation}) => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.boxNav}>
          {target == "menu" ?
          <TouchableOpacity onPress={() => Navigation.replace('Menu')}>
            <PlusSquare style={styles.iconNavOn} /> 
          </TouchableOpacity>
           : 
          <TouchableOpacity onPress={() => Navigation.replace('Menu')}>
            <PlusSquare style={styles.iconNav} /> 
          </TouchableOpacity> 
           }
      </View>
      <View style={styles.boxNav}>
        {target == "home" ? 
        <TouchableOpacity onPress={() => Navigation.replace('Home')}>
          <Home style={styles.iconNavOn} />
        </TouchableOpacity>
        : 
        <TouchableOpacity onPress={() => Navigation.replace('Home')}>
          <Home style={styles.iconNav} />
        </TouchableOpacity>
        }
      </View>
      <View style={styles.boxNav}>
        {target == "setting" ? 
        <TouchableOpacity onPress={()=> Navigation.replace('Setting')}>
          <Setting style={styles.iconNavOn} />
        </TouchableOpacity>
        :  
        <TouchableOpacity onPress={()=> Navigation.replace('Setting')}>
          <Setting style={styles.iconNav} />
        </TouchableOpacity>
        }
        
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    height: 48,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxNav: {
    backgroundColor: colors.Dark,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconNav: {
    width: 32,
    height: 32,
    color: colors.textSecond,
    alignSelf: 'center',
    opacity: .5
  },
  iconNavOn: {
    width: 32,
    height: 32,
    color: colors.textPrime,
    alignSelf: 'center',
  },
});
