import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import background from '../../assets/images/background.png';
import icon_menu from '../../assets/icons/icon_menu.png';
import logo from '../../assets/icons/logo.png';
import icon_search from '../../assets/icons/icon_search.png';
import icon_favourite from '../../assets/icons/icon_favourite.png';
import icon_mostly_sunny_small from '../../assets/icons/icon_mostly_sunny_small.png';

import ScrollBar from '../../components/ScrollBar';
import Search from '../search/Search';

const Home = ({navigation}) => {
    const handleDrawer= () => {
        navigation.openDrawer();
    }
    const handleSearch = () => {
      navigation.navigate('Search');
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}>
            <ScrollView style={{flex:1}}>
        <View style={styles.topBarView}>
          <View style={styles.topView}>
            <Pressable onPress={handleDrawer}>
            <Image source={icon_menu} style={styles.menu}></Image>
            </Pressable>
            <Image source={logo} style={styles.logo}></Image>
          </View>
          <TouchableOpacity onPress={handleSearch}>
            <Image source={icon_search} style={styles.search}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>WED, 28 NOV 2018 11:35</Text>
          <Text style={styles.place}>Udupi,Karnataka</Text>
          <View style={styles.favouriteView}>
            <Image source={icon_favourite} style={styles.favourite} />
            <Text style={styles.favouriteText}>Add to favourite</Text>
          </View>

          <View style={styles.temperatureView}>
            <Image source={icon_mostly_sunny_small} style={styles.sun}></Image>
            <View style={styles.numView}>
              <Text style={styles.number}>31</Text>
              <Text style={styles.celcius}>°C</Text>
              <Text style={styles.faranheit}>°F</Text>
            </View>
            <Text style={styles.tempText}>Mostly Sunny</Text>
          </View>
        </View>

        </ScrollView>
        {/* <View style={styles.bottomView}>
        </View> */}

        <ScrollBar/>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarView: {
    marginTop: 42,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    height: 12,
    width: 18,
    marginRight: '15%',
  },
  logo: {
    height: 24,
    width: 113,
  },
  search: {
    height: 17.49,
    width: 17.49,
    scaleY: -1,
  },

  textView: {
    marginTop: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 15,
    width: 220,
    opacity: 0.6,
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 13,
    letterSpacing: 1.5,
    textAlign: 'center',
    lineHeight: 15,
  },
  place: {
    height: 21,
    width: 138,
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 10,
  },
  favouriteView: {
    flexDirection: 'row',
    marginTop: 23,
  },

  favouriteText: {
    height: 15,
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
  },
  favourite: {
    height: 16.97,
    width: 18,
    marginRight: 7,
  },
  temperatureView: {
    marginTop: 81,
    alignItems: 'center',
  },
  numView:{
    marginTop:15,
    flexDirection:'row',
    alignItems:'baseline',
    // borderWidth:1,
    paddingBottom:5
  },
  number: {
    height: 59,
    width: 60,
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 52,
    fontWeight: '500',
  },
  sun: {
    height: 67,
    width: 64,
  },
  tempText:{
    marginTop:11,
    height:21,
    // width:108,
    color:'#FFFFFF',
    fontSize:18,
    lineHeight:21,
    textAlign:'center',
    // font-family: Roboto;
  },
  bottomView:{
    height: 100,
    width: "100%",
   position:"absolute",
   bottom:0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth:1,
  },
  celcius:{
    height: 30,
    color: '#E32843',
    fontSize: 16,
    lineheight: 19,
    backgroundColor:'#FFFFFF',
    padding:5,
    borderRadius:2,
    borderWidth:1,
    borderColor:'#FFFFFF'
  },
  faranheit:{
    height: 30,
    color: '#FFFFFF',
    fontSize: 16,
    lineheight: 19,
    padding:5,
    borderWidth:1,
    borderColor:'white',
    borderRadius:2,
  },
});

export default Home;
