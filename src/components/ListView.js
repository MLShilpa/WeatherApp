import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCity,setFavourite } from '../redux/FavouriteSlice';
import { getData } from '../redux/WeatherSlice';
  
  const ListView = ({navigation,onPress}) =>{
    const dispatch = useDispatch();

    const data = useSelector(state => state.favourite.value);

    console.log(data)

    return(

        <View>
        <View style={styles.content}>
          <Text style={styles.addedText}>{data.length} City added as favourite</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.removeAll}>Remove All</Text>
          </TouchableOpacity>
        </View>
        <View>
        <FlatList
        data={data}
        keyExtractor = {item => item.city}
            renderItem={({item}) => (
              <Pressable  
              onPress={() => {
                dispatch(getData(item.id));
                navigation.navigate('HomeScreen');
              }}
              onLongPress={() => {
                dispatch(deleteCity({id: item.city}));
                dispatch(setFavourite(false))
                // Toast.show(`Deleted ${item.city} Successfully`);
              }}
              >
        <View style={styles.listItem}>
          <View>
            <Text style={styles.location}>{item.city}, {item.region}</Text>
            <View style={styles.tempDetails}>
              <Image
                source={item.source}
                style={styles.weather}
              />
              <Text style={styles.actualTemp}>{item.temperature}</Text>
              <Text style={styles.unit}>°C</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={()=> {
               dispatch(deleteCity({id: item.city}));
               dispatch(setFavourite(false))
            }}>
            <Image
              source={require('/Volumes/Development/Projects/WeatherApp/src/assets/icons/icon_favourite_active.png')}
              style={styles.favIcon}
            />
            </TouchableOpacity>
          </View>
        </View>

        </Pressable>
        )}
        />
        </View>
        </View>

    )
  }

  export default ListView;

  const styles=StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:16,
      },
      addedText: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        letterSpacing: 0,
        lineHeight: 15,
      },
      removeAll: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
        letterSpacing: 0,
        lineHeight: 15,
      },
      listItem: {
        height: 80,
        marginHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255,0.1)',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:1,
      },
      favIcon: {
        height: 17,
        width: 18,
        marginEnd: 20,
      },
      location: {
        height: 18,
        color: '#FFE539',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 18,
        marginLeft: 15,
        marginTop: 15,
      },
      tempDetails: {
        flexDirection: 'row',
      },
      weather: {
        height:23,
        width: 23,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
      style3: {
        height: 14,
        width: 22,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    style4: {
        height: 16,
        width: 21.52,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    style6: {
        height: 21,
        width: 20,
        marginLeft: 9,
        marginTop: 10,
        marginBottom: 16,
        marginRight: 1,
      },
    //   height: 21,
    //   width: 22,
      actualTemp: {
        height: 21,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 21,
        marginLeft: 9,
        marginTop: 11,
        marginBottom: 16,
        marginRight: 1,
      },
      unit: {
        height: 15,
        color: '#FFFFFF',
        fontSize: 13,
        letterSpacing: 0,
        lineHeight: 15,
        marginTop: 15,
        marginLeft: 1,
      },
      description: {
        height: 16,
    
        color: '#FFFFFF',
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 16,
        marginTop: 14,
        marginLeft: 17,
      },
})