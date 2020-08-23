import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from './assets';

export default function App() {
  return (
    <View style={styles.page}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>E - Observation Report</Text>
      <View style={styles.footer}>
        <Text style={styles.copy}>Copyright 2020 by Yadi Supriatna</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 50,
  },
  text: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  copy: {
    fontSize: 14,
    marginTop: 6,
    color: 'grey',
  },
});
