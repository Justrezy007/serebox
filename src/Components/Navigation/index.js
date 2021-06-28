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
            <Text style={styles.textNavOn}>Menu</Text>
          </TouchableOpacity>
           : 
          <TouchableOpacity onPress={() => Navigation.replace('Menu')}>
            <PlusSquare style={styles.iconNav} /> 
            <Text style={styles.textNav}>Menu</Text>
          </TouchableOpacity> 
           }
      </View>
      <View style={styles.boxNav}>
        {target == "home" ? 
        <TouchableOpacity onPress={() => Navigation.replace('Home')}>
          <Home style={styles.iconNavOn} />
          <Text style={styles.textNavOn}>Home</Text>
        </TouchableOpacity>
        : 
        <TouchableOpacity onPress={() => Navigation.replace('Home')}>
          <Home style={styles.iconNav} />
          <Text style={styles.textNav}>Home</Text>
        </TouchableOpacity>
        }
      </View>
      <View style={styles.boxNav}>
        {target == "setting" ? 
        <TouchableOpacity onPress={()=> Navigation.replace('Setting')}>
          <Setting style={styles.iconNavOn} />
          <Text style={styles.textNavOn}>Settings</Text>
        </TouchableOpacity>
        :  
        <TouchableOpacity onPress={()=> Navigation.replace('Setting')}>
          <Setting style={styles.iconNav} />
          <Text style={styles.textNav}>Settings</Text>
        </TouchableOpacity>
        }
        
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    height: 64,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxNav: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNavOn: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: 'bold',
    color: colors.Secondary,
  },
  textNav: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: 'bold',
    color: colors.textSecond,
  },
  iconNav: {
    width: 32,
    height: 32,
    color: colors.textSecond,
    alignSelf: 'center',
  },
  iconNavOn: {
    width: 32,
    height: 32,
    color: colors.Secondary,
    alignSelf: 'center',
  },
});
