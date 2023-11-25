import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import themes from '../../../themes';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchIconWrapper}>
        <AntIcon name="close" style={styles.searchIcon} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          style={styles.textInput}
          placeholder="Temukan makanan yang kamu mau yuk!"
        />
        <AntIcon name="search1" style={styles.searchIcon} />
      </View>
      <Text style={styles.daftarText}>Daftar</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    paddingVertical: themes.metrics.Height * 0.01,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  searchIconWrapper: {
    paddingHorizontal: themes.metrics.Width * 0.02,
    paddingVertical: themes.metrics.Height * 0.01,

    margin: '2%',
  },

  searchIcon: {
    fontSize: 17,
    fontWeight: 'bold',
    color: themes.color.mainColor,
  },

  inputWrapper: {
    width: themes.metrics.Width * 0.65,
    height: themes.metrics.Height * 0.05,

    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',

    fontSize: 10,
    marginRight: '2%',

    padding: 5,
    borderWidth: 1,
    borderColor: themes.color.mainColor,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  textInput: {
    width: themes.metrics.Width * 0.57,
    height: themes.metrics.Height * 0.05,

    color: 'black',
    fontSize: themes.fontSizeText.supersmall,
    margin: 0,
  },

  daftarText: {
    padding: 10,
    fontSize: themes.fontSizeText.medium,
    color: themes.color.mainColor,
  },
});
