import {StyleSheet, View, Dimensions} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.child} />
      <View style={styles.child} />
      <View style={styles.child} />
      <View style={styles.child} />
      <View style={styles.child} />
      <View style={styles.child} />
    </View>
  );
};

const gap = 10;
const itemPerRow = 4;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = Dimensions.get('window').width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  child: {
    width: childWidth,
    height: childWidth,
    marginVertical: gap / 2,
    backgroundColor: '#52B596',
    marginHorizontal: gap / 2,
  },
});
