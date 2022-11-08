import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const TopBar = ({Name,onPress}) => {
  return (
   
          <View style={styles.topBar}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={onPress}>
              <Icon name="arrow-back" size={25} color={'black'} style={styles.back} />
              </TouchableOpacity>
              <Text style={styles.text}>{Name}</Text>
            </View>
            <Icon name="search" size={25} color={'black'} style={styles.search} />
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15,
    backgroundColor: '#FFFFFF',
  },
  topView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginRight:34,
  },
  text: {
    height: 24,
    width: 204,
    color: '#292F33',
    //   font-family: Roboto;
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
});
export default TopBar;
