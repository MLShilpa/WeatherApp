import React from 'react';

import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';

import icon_temperature_info from '../assets/icons/icon_temperature_info.png';
import icon_humidity_info from '../assets/icons/icon_humidity_info.png';
import icon_precipitation_info from '../assets/icons/icon_precipitation_info.png';

const ScrollBar = () => {
  return (
    <View style={styles.detailView}>
      <ScrollView horizontal={true}>
        <View style={styles.insideScroll}>
          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image source={icon_temperature_info} style={styles.tempIcon} />
              <View>
                <Text style={styles.minmax}>Min - Max</Text>
                <Text style={styles.tempNumber}>22°- 34°</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image source={icon_precipitation_info} style={styles.pecipitationIcon} />
              <View>
                <Text style={styles.minmax}>Precipitation</Text>
                <Text style={styles.tempNumber}>0%</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image source={icon_humidity_info} style={styles.humidityIcon} />
              <View>
                <Text style={styles.minmax}>Humidity</Text>
                <Text style={styles.tempNumber}>47%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollBar;

const styles = StyleSheet.create({
  bottomDetails: {
    width: '35%',
  },
  detailView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    alignSelf: 'center',
    height: 100,
    justifyContent: 'space-evenly',
  },
  insideScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255,0.3)',
    flex: 1,
  },
  temperature: {
    marginTop: 30,
    marginHorizontal: 18,
    flexDirection: 'row',
    height: 41,
    width: 94,
  },
  tempIcon: {
    height: 26,
    width: 13,
    marginRight: 18,
  },
  minmax: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
  },
  tempNumber: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
  },
  pecipitationIcon:{
    height: 23,
    width: 24,
    marginRight: 15,
  },
  humidityIcon:{
    height: 20,
    width: 15,
    marginRight: 16,
  },
});
