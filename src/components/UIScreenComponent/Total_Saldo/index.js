import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import themes from '../../../themes';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ButtonSaldoWithText from '../../SmallComponent/button-with-text';

const TotalSaldo = () => {
  const SaldoText = ({title, customStyles, numberOfLines = 0}) => {
    const stylesSaldo = StyleSheet.create({
      text: {
        flex: 1,
        width: '100%',
        color: 'white',
        ...customStyles,
      },
    });

    return (
      <Text style={stylesSaldo.text} numberOfLines={numberOfLines}>
        {title}
      </Text>
    );
  };

  const SaldoBoxComponent = () => {
    return (
      <View style={styles.saldoBoxStyle}>
        {/* Text Nama Bank */}
        <View style={{flex: 1, paddingLeft: 8, paddingVertical: 8}}>
          <SaldoText
            title={'Dowa Pay'}
            customStyles={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: themes.fontSizeText.small,
            }}
          />
          <SaldoText
            title={'Rp. 4.000.000'}
            numberOfLines={1}
            customStyles={{
              fontWeight: 'bold',
              fontSize: themes.fontSizeText.medium,
            }}
          />
        </View>
        {/* Icon Saldo */}
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon name="wallet" size={40} color={'white'} />
        </View>
      </View>
    );
  };

  const SaldoBoxActionComponent = () => {
    return (
      <View style={{flex: 1}}>
        <ButtonSaldoWithText title="Isi Saldo" />
        <ButtonSaldoWithText title="Cek Riwayat Transaksi" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <SaldoBoxComponent />
        <View style={{marginHorizontal: '2%'}} />
        <SaldoBoxActionComponent />
      </View>
    </View>
  );
};

export default TotalSaldo;

const styles = StyleSheet.create({
  container: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
  boxContainer: {
    width: themes.metrics.Width * 0.9,
    height: themes.metrics.Height * 0.13,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'white',
    borderRadius: 15,
    padding: 13,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  saldoBoxStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '90%',
    backgroundColor: themes.color.mainColor,
    // borderRadius: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
    // padding: 32,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // elevation: 14,
    display: 'flex',
    marginRight: '2%',
  },
});
