import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import background from '../assets/images/background.png';
import Nothing from './Nothing';

import Icon from 'react-native-vector-icons/MaterialIcons';


const Empty = ({navigation}) => {
    const handleBack =() => {
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}>
        <SafeAreaView style={styles.imageBackground}>
          <View style={styles.topBar}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={handleBack}>
              <Icon name="arrow-back" size={25} color={'black'} style={styles.back} />
              </TouchableOpacity>
              <Text style={styles.FavText}>Favourite</Text>
            </View>
            <Icon name="search" size={25} color={'black'} style={styles.search} />
          </View>
        <Nothing text={'No Favourites added'}/>
          
        </SafeAreaView>
      </ImageBackground>
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
  FavText: {
    height: 24,
    width: 204,
    color: '#292F33',
    //   font-family: Roboto;
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },

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
export default Empty;
