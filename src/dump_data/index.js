import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EsDogerpng from '../../esdoger.webp';

const dataJajanan = [
  {
    id: 1,
    title: 'es gedor bukan es doger',
    rating: '4.6',
    distance: '2 Km',
    estimationTime: '21 Menit',
    productImage: EsDogerpng,
  },
  {
    id: 2,
    title: 'pisang goreng',
    rating: '4.7',
    distance: '1 Km',
    estimationTime: '18 menit',
    productImage: EsDogerpng,
  },
  {
    id: 3,
    title: 'martabak',
    rating: '4.8',
    distance: '2.5 km',
    estimationTime: '25 Menit',
    productImage: EsDogerpng,
  },
];

const dataCategory = [
  {
    id: 1,
    nameIcon: 'medal',
    title: 'Terlaris',
    component: <FontAwesome5Icon name="medal" size={30} color={'white'} />,
  },
  {
    id: 2,
    nameIcon: 'food',
    title: 'Makanan',
    component: <MaterialCommunityIcons name="food" size={30} color={'white'} />,
  },
  {
    id: 3,
    nameIcon: 'food-fork-drink',
    title: 'Minuman',
    component: (
      <MaterialCommunityIcons
        name="food-fork-drink"
        size={30}
        color={'white'}
      />
    ),
  },
  {
    id: 4,
    nameIcon: 'cookie',
    title: 'Camilan',
    component: (
      <MaterialCommunityIcons name="cookie" size={30} color={'white'} />
    ),
  },
];

export {dataJajanan, dataCategory};
