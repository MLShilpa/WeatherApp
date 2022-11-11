import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import background from '../../assets/images/background.png';
import TopBar from '../../components/TopBar';
import Nothing from '../../components/Nothing';
import RecentList from '../../components/RecentList';
import {useSelector} from 'react-redux';
import {clearAll} from '../../redux/FavouriteSlice';
import {useDispatch} from 'react-redux';

const RecentSearch = ({navigation}) => {
  const data = useSelector(state => state.favourite.recent);
  const dispatch = useDispatch();

  // useEffect (()=>{
  //   !data.length ? (setRemove(true)): setRemove(false)
  // },[])

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
          dispatch(clearAll());
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
          <TopBar Name={'Recent Search'} onPress={handleBack} />
          {/* <Nothing text={'No Favourites added'}/> */}

          {data.length ? (
            <>
              <View style={styles.content}>
                <Text style={styles.addedText}>You Recently searched for</Text>
                <TouchableOpacity onPress={createTwoButtonAlert}>
                  <Text style={styles.removeAll}>Clear All</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                <RecentList
                  navigation={navigation}
                />
              </View>
            </>
          ) : (
            <Nothing text={'No Recent Search'} />
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
    paddingHorizontal: 16,
    paddingVertical: 15,
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
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
  },
});
export default RecentSearch;
