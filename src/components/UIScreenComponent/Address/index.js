import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppTheme from '../../../themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddressComponent = () => {
  const [address, setAddress] = useState(
    'Ruko Pasar Alam , 46, Jalan Alun-Alun Selatan No. 46, RT.004 /RW.016. Kel. Padurenan Kec. Mustika Jaya, Bumi Pala, Vida, Bekasi City, West Java 16340',
  );

  return (
    <View style={styles.addressWrapper}>
      <MaterialIcons name="location-pin" size={20} style={styles.addressIcon} />
      <Text numberOfLines={1} style={styles.addressText}>
        Antar Ke: {address}
      </Text>
      <MaterialIcons
        name="navigate-next"
        size={20}
        style={styles.addressIcon}
      />
    </View>
  );
};

export default AddressComponent;

const styles = StyleSheet.create({
  addressWrapper: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  addressIcon: {
    padding: 5,
    color: AppTheme.color.mainColor,
  },
  addressText: {
    width: AppTheme.metrics.Width * 0.78,
    maxWidth: AppTheme.metrics.Width * 0.8,
    fontSize: AppTheme.fontSizeText.supersmall,
    color: AppTheme.color.mainColor,
    fontWeight: 'bold',
  },
});
