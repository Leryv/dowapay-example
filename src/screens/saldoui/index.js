import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  AddressComponent,
  CategoryJajananComponent,
  DisplayJajananComponent,
  SearchComponent,
  TotalSaldoComponent,
} from '../../components/UIScreenComponent';
import AppTheme from '../../themes';
import {dataCategory, dataJajanan} from '../../dump_data';

const SaldoUI = ({text = 'Saldoui'}) => {
  return (
    <View style={styles.mainDiv}>
      <SearchComponent />
      <AddressComponent />
      <ScrollView>
        <TotalSaldoComponent />
        <CategoryJajananComponent datas={dataCategory} />
        <DisplayJajananComponent datas={dataJajanan} />
      </ScrollView>
    </View>
  );
};

export default SaldoUI;

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: AppTheme.metrics.Width,
  },
});
