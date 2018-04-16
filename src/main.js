import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const beranda = require('./img/beranda.png');
const bg = require('./img/bg2.jpg');

export default class Beranda extends React.Component {
  static navigationOptions = {
    title: 'Beranda',
    drawerLabel: 'Beranda',
    drawerIcon: () => (
    <Image
      source={beranda}
      style={styles.icon}
    />
  )
  };

  render() {
    return (

        <View style={styles.container}>
          <Image source={bg} style={styles.bg}/>
              <SectionList
                sections={[
                  {
                    title: 'About:',
                    data: ['Pendataan adalah aplikasi yang dapat memudahkan anda dalam pendataan anggota. Pendataan mampu menyimpan dan menampilkan apa yang diinputkan oleh user.']
                  },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
          <View style={styles.footer}>
            <Text>@I Gede Made Waisya Adi Suphala</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'transparent'
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',

  },
  item: {
    padding: 10,
    fontSize: 14,
    // height: 100
  },
  icon: {
    height: 24,
    width: 24
  },
  bg: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    height: 200,
    width: 400,
    backgroundColor: 'transparent'
  },
  isi: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold'
  },
    footer: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
});
