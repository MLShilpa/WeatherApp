import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icon_clear from '../../assets/icons/icon_clear.png';

const Search = ({navigation}) => {
  const [icon, setcon] = useState(null);
  const [text, setText] = useState();

  const handleChange = value => {
    setText(value);
    setcon(icon_clear);
  };
  const handleClear = () => {
    setText();
  };

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
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
    borderWidth:1,
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
});
