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
import { useDispatch } from 'react-redux';
import { removeAll } from '../../redux/FavouriteSlice';

const Favourite = ({navigation}) => {
  const [remove, setRemove] = useState(false);
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
      {text: 'YES', onPress: () => 
      {
        dispatch(removeAll())
        setRemove(!remove)}},
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
            
            {!remove?(
           <>
              <View style={{flex:1}}>
                <ListView navigation={navigation} onPress={createTwoButtonAlert}/>
              </View>
          </>
          ):(
            <Nothing text={'No Favourites added'}/>
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
});
export default Favourite;
