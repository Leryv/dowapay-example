import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import themes from '../../../themes';

const ButtonSaldoWithText = ({title = 'tlng isi title'}) => {
  return (
    <View style={styles.ContainerButtonSaldoStyles}>
      <TouchableOpacity style={styles.ButtonSaldoStyles}>
        <Text style={styles.textStyleInButtonSaldo}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerButtonSaldoStyles: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonSaldoStyles: {
    width: '100%',
    padding: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.color.mainColor,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
  },

  textStyleInButtonSaldo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: themes.fontSizeText.supersmall,
  },
});

export default ButtonSaldoWithText;
