1. Code untuk Dark mode
   const isDarkMode = useColorScheme() === 'dark';

2. Contoh Code untuk style
   sectionContainer: {
   marginTop: 32,
   paddingHorizontal: 24,
   },
   sectionTitle: {
   fontSize: 24,
   fontWeight: '600',
   },
   sectionDescription: {
   marginTop: 8,
   fontSize: 18,
   fontWeight: '400',
   },
   highlight: {
   fontWeight: '700',
   },

3. penyebab untuk error node adalah karena node tidak support dan harus diubah terlebih dahulu ke node versi 16
