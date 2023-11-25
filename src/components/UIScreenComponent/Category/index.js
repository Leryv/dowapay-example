import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import themes from '../../../themes';

const CategoryJajanan = ({datas}) => {
  const Box = ({children, title, id}) => {
    return (
      <View id={id} style={styles.boxContainer}>
        <View style={styles.box}>{children}</View>
        <Text style={styles.textBox}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {datas.map(data => (
        <Box id={data.id} key={data.id} title={data.title}>
          {data.component}
        </Box>
      ))}
    </View>
  );
};

export default CategoryJajanan;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    maxWidth: themes.metrics.Width,
    maxHeight: themes.metrics.Height * 0.2,
  },

  boxContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '70%',
    // borderRadius: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: themes.color.secondColor,
  },

  textBox: {
    fontWeight: 'bold',
    fontSize: themes.fontSizeText.small,
  },
});
