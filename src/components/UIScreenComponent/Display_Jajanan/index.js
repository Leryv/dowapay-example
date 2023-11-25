import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import themes from '../../../themes';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EsDogerpng from '../../../../esdoger.webp';
import {SafeAreaView} from 'react-native';

const DisplayJajanan = ({datas}) => {
  const ImageComponent = ({imageJajanan}) => {
    return (
      <View style={styles.imageJajananContainer}>
        <Image source={imageJajanan} style={styles.imageJajananStyles} />
      </View>
    );
  };

  const DetailJajananComponent = ({
    title,
    rating,
    distance,
    estimationTime,
  }) => {
    return (
      <View style={styles.detailJajananContainer}>
        <Text style={styles.titleJajananStyles}>{title}</Text>
        <View style={styles.rateAndDistanceLocationStyles}>
          <FontAwesomeIcon name="star" style={styles.iconJajananStyles} />
          <Text style={styles.rateJajananStyles}>
            {rating} | {distance}
          </Text>
        </View>
        <Text style={styles.estimationStyles}>
          Diantar dalam {estimationTime}
        </Text>
      </View>
    );
  };
  return (
    <View>
      {datas.map(data => (
        <View style={styles.container} key={data.id}>
          <View style={styles.jajananContainer}>
            <ImageComponent imageJajanan={data.productImage} />
            <DetailJajananComponent
              title={data.title}
              rating={data.rating}
              distance={data.distance}
              estimationTime={data.estimationTime}
            />
          </View>
          <View style={styles.borderBottomLineJajananStyles} />
        </View>
      ))}
    </View>
  );
};

export default DisplayJajanan;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: themes.metrics.Width * 1,
    height: themes.metrics.Height * 0.2,
  },

  jajananContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },

  imageJajananContainer: {
    flex: 4,
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageJajananStyles: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    borderColor: themes.color.secondColor,
    borderWidth: 8,
  },

  detailJajananContainer: {
    flex: 7,
    flexDirection: 'column',
    display: 'flex',
    padding: 8,
  },

  titleJajananStyles: {
    fontWeight: 'bold',
    color: themes.color.mainColor,
    fontSize: themes.fontSizeText.big,
    textTransform: 'capitalize',
  },

  rateAndDistanceLocationStyles: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconJajananStyles: {
    fontSize: themes.fontSizeText.superbig,
    color: themes.color.mainColor,
    marginRight: '5%',
    marginVertical: '2%',
  },

  rateJajananStyles: {
    fontWeight: 'bold',
    color: themes.color.mainColor,
    fontSize: themes.fontSizeText.medium,
  },

  estimationStyles: {
    color: themes.color.mainColor,
  },

  borderBottomLineJajananStyles: {
    borderBottomColor: 'black',
    borderWidth: 2,
    borderColor: themes.color.secondColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: '5%',
  },
});
