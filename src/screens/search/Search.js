import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icon_clear from '../../assets/icons/icon_clear.png';
import { FlatList } from 'react-native-gesture-handler';
import { SearchApi } from '../../services/SearchApi';
import { getData } from '../../redux/WeatherSlice';
import { setFavourite , recentCity} from '../../redux/FavouriteSlice';
import { useDispatch, useSelector } from 'react-redux';


const Search = ({setSearch,search}) => {
  const favourite = useSelector(state=> state.favourite.recentState)

  const list = useSelector(state=>state.weather.list)
  const source =  {uri: `https:${list.current?.condition.icon}`};
  const [celcius, setCelsius] = useState(list.current?.temp_c);

  const [data,setData] = useState ()
  const dispatch = useDispatch();


  const [icon, setIcon] = useState(null);
  const [text, setText] = useState();

  const handleChange = async value => {
    setText(value);
    setIcon(icon_clear);
    const Data = await SearchApi(value)
    setData(Data)
    console.log('I am Data',Data)
  };
  const handleClear = () => {
    setText();
  };

  const handleBack = () => {
    setSearch(!search)
  };
  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    region:list.location?.region,
    source: source,
    temperature: celcius,
    description: list.current?.condition.text,
    favourite:favourite,
  };

  const handleSearch = (item) => {
    setText(item.name)
    dispatch(setFavourite(false))
    setSearch(!search)
    dispatch(getData(item.name))
    dispatch(recentCity(obj))
  }
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#673AB7"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon
            name="arrow-back"
            size={27}
            color={'black'}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search for City"
          style={styles.inputText}
          value={text}
          onChangeText={value => handleChange(value)}
        />
        <View>
          {text ? (
            <TouchableOpacity onPress={handleClear}>
              <Image source={icon} style={styles.clearButton} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>

      <View style={styles.line} />

      <View >
          <FlatList
        data={data}
        renderItem={({item})=>(
          (
            <Pressable onPress={()=>handleSearch(item)}>
           <View style={styles.flatStyle}>
            <Text>{item.name}</Text>
            </View>
            </Pressable>
          )
        )}
          />
        </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    height: 56,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:1,
    justifyContent:'space-between'
  },
  backIcon: {
    // width: 24,
    // height: 24,
    marginRight: 25,
  },

  inputText: {
    height: 39,
    width: '75%',
    opacity: 4,
    color: '#000000',
    // font-family: Roboto,
    fontSize: 15,
    letterSpacing: 0,
  },
  line: {
    height: 0.1,
    width: '100%',
    opacity: 0.2,
    borderWidth: 0.3,
    borderBottomColor: '#000000',
  },
  clearButton: {
    height: 14,
    width: 14,
    marginRight:10,
  },
  flatStyle:{
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
});
