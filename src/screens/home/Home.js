import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/WeatherSlice';
// import LinearGradient from 'react-native-linear-gradient';
import background from '../../assets/images/background.png';
import Search from '../search/Search';
import ScrollBar from '../../components/ScrollBar';
import moment from 'moment';
import {addCity, setFavourite, deleteCity} from '../../redux/FavouriteSlice';

import icon_menu from '../../assets/icons/icon_menu.png';
import logo from '../../assets/icons/logo.png';
import icon_search from '../../assets/icons/icon_search.png';
import icon_favourite from '../../assets/icons/icon_favourite.png';
import icon_favourite_active from '../../assets/icons/icon_favourite_active.png';
import icon_mostly_sunny_small from '../../assets/icons/icon_mostly_sunny_small.png';

const Home = ({navigation}) => {
  const [search, setSearch] = useState(false);
  const list = useSelector(state => state.weather.list);
  const source = {uri: `https:${list.current?.condition.icon}`};

  const [celcius, setCelsius] = useState(list.current?.temp_c);

  const favourite = useSelector(state => state.favourite.favourite);
  const [clicked, setClicked] = useState(favourite);
  // console.log('I am fav', favourite);

  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YY     hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  useEffect(() => {
    dispatch(getData('Udupi'));
    // dispatch(setFavourite(false))
    currentDateTime();
    setCelsius(list.current?.temp_c);
  }, []);

  const dispatch = useDispatch();

  const handleDrawer = () => {
    navigation.openDrawer();
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleFaranheit = () => {
    setCelsius(list.current?.temp_f);
  };

  const handleCelcius = () => {
    setCelsius(list.current?.temp_c);
  };
  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    source: source,
    temperature: celcius,
    description: list.current?.condition.text,
  };

  const handlePress = () => {
    favourite ? 
    (
      dispatch(setFavourite(false)),
    dispatch(deleteCity(obj))
    )
    : 
    (
      dispatch(setFavourite(true)),
      dispatch(addCity(obj)))
  };
  return (
    <>
      {!search ? (
        <View style={styles.container}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.container}>
            <ScrollView style={{flex: 1}}>
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
                <Text style={styles.text}>{date}</Text>
                <Text style={styles.place}>
                  {list.location.name},{list.location.region}
                </Text>

                <View style={styles.favouriteView}>
                  {favourite ? (
                    <>
                      <TouchableOpacity onPress={handlePress}>
                        <Image
                          source={icon_favourite_active}
                          style={styles.favourite}
                        />
                      </TouchableOpacity>
                      <Text style={styles.favouriteText}>Favourite</Text>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity onPress={handlePress}>
                        <Image
                          source={icon_favourite}
                          style={styles.favourite}
                        />
                      </TouchableOpacity>
                      <Text style={styles.favouriteText}>Add To Favourite</Text>
                    </>
                  )}
                </View>

                <View style={styles.temperatureView}>
                  <Image
                    source={{uri: `https:${list.current.condition?.icon}`}}
                    style={styles.sun}></Image>

                  <View style={styles.numView}>
                    <Text style={styles.number}>{celcius}</Text>
                    <View style={styles.uniqueGroup}>
                      {celcius == list.current?.temp_c ? (
                        <>
                          <TouchableOpacity onPress={handleCelcius}>
                            <Text style={styles.celcius}>°C</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={handleFaranheit}>
                            <Text style={styles.faranheit}>°F</Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <TouchableOpacity onPress={handleCelcius}>
                            <Text style={styles.faranheit}>°C</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={handleFaranheit}>
                            <Text style={styles.celcius}>°F</Text>
                          </TouchableOpacity>
                        </>
                      )}
                    </View>
                  </View>

                  <Text style={styles.tempText}>
                    Mostly {list.current?.condition.text}
                  </Text>
                </View>
              </View>
            </ScrollView>
            <ScrollBar />
          </ImageBackground>
        </View>
      ) : (
        <Search setSearch={setSearch} search={search} />
      )}
    </>
  );
};
export default Home;

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
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    letterSpacing: 1.5,
    textAlign: 'center',
    lineHeight: 15,
  },
  place: {
    height: 21,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Regular',
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
    marginTop: 80,
    alignItems: 'center',
  },
  numView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingBottom: 5,
  },
  number: {
    height: 59,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 52,
    fontWeight: '500',
  },
  sun: {
    height: 80,
    width: 100,
  },
  tempText: {
    marginTop: 11,
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  uniqueGroup: {
    height: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 5,
    borderWidth: 1,
  },
  celcius: {
    height: 30,
    color: '#E32843',
    fontSize: 16,
    lineheight: 19,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  faranheit: {
    height: 30,
    color: '#FFFFFF',
    fontSize: 16,
    lineheight: 19,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
  },
});
