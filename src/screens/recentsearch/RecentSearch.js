import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import background from '../../assets/images/background.png';
import TopBar from '../../components/TopBar';
import Nothing from '../../components/Nothing';

const RecentSearch = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    Alert.alert('', 'Are you sure want to remove all the favourites', [
      {
        text: 'NO',
        onPress: () => {
          console.log('No pressed');
        },
        style: {color: '#673AB7'},
      },
      {
        text: 'YES',
        onPress: () => {
          console.log('Yes pressed');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}>
        <SafeAreaView style={styles.imageBackground}>
          <TopBar Name={'Recent Search'} onPress={handleBack} />
          <View style={styles.headerText}>
            <Text style={styles.cityText}>You recently searched for</Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <Nothing text={'No Recent Search'} />

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
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  cityText: {
    height: 15,
    // width: 145,
    color: '#FFFFFF',
    // font-family: Roboto;
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    fontWeight: '500',
  },
  clearText: {
    height: 15,
    // width: 66,
    color: '#FFFFFF',
    // font-family: Roboto;
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: 'right',
  },
});
export default RecentSearch;
