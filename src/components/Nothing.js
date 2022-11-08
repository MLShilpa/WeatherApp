import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import icon_nothing from '../assets/icons/icon_nothing.png';


const Nothing = ({text}) => {
  return (
   
          <View style={styles.image}>
            <Image source={icon_nothing} style={styles.nothingIcon} />
            <Text style={styles.text}>{text}</Text>
          </View>
       
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 250,
    alignItems: 'center',
  },
  nothingIcon: {
    height: 84,
    width: 159,
  },
  text: {
    height: 21,
    color: '#FFFFFF',
    //   fontFamily: Roboto;
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop:25,
  },
});
export default Nothing;
