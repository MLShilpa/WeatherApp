import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import background from '../../assets/images/background.png';
import TopBar from '../../components/TopBar';
import ListView from '../../components/ListView';
import Nothing from '../../components/Nothing';
import {useDispatch, useSelector} from 'react-redux';
import {removeAll, setFavourite} from '../../redux/FavouriteSlice';
import {ScrollView} from 'react-native-gesture-handler';

const Favourite = ({navigation}) => {
  const data = useSelector(state => state.favourite.value);

  const dispatch = useDispatch();
  const handleBack = () => {
    navigation.goBack();
  };
  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'NO',
        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'YES',
        onPress: () => {
          dispatch(removeAll()), dispatch(setFavourite(false));
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}>
        <SafeAreaView style={styles.safeView}>
          <TopBar Name={'Favourites'} onPress={handleBack} />
          {/* <Nothing text={'No Favourites added'}/> */}

          {data.length ? (
            <>
              <View>
                <View style={styles.content}>
                  <Text style={styles.addedText}>
                    {data.length} City added as favourite
                  </Text>
                  <TouchableOpacity onPress={createTwoButtonAlert}>
                    <Text style={styles.removeAll}>Remove All</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex:1}}>
                <ListView navigation={navigation} />
              </View>
            </>
          ) : (
            <Nothing text={'No Favourites added'} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
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
});
export default Favourite;
