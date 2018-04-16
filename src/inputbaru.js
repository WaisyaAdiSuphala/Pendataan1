 import React from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Inputbaru extends React.Component {
    static navigationOptions = {
      header: null
    };

    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, margin: 10 ,color: 'white', textAlign: 'center' }} > REFISI MI
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.input}>
          <Text style={{ fontSize: 20, margin: 35, color: 'black', textAlign: 'center' }}>INPUT SPESIFIKASI BARU</Text>

          </View>
          <ScrollView>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            multiline = {true}
            underlineColorAndroid="#FFFFFF"
          placeholder="masukan nama hp"/>
          </View>

          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan harga"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan operation system"/>
          </View><View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan CPU"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan RAM"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan storage"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan Ukuran"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan spesifikasi hp"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan tipe network"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan kamera depan"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan kamera belakang"/>
          </View>
          <View style={styles.nama}>
          <TextInput
            style={styles.text}
            underlineColorAndroid="#FFFFFF"
            multiline = {true}
          placeholder="masukan berat"/>


          </View>
          <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('Page1')}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('Awal')}>
            <Text style={styles.ButtonText}>Go Back</Text>
          </TouchableOpacity>

          </ScrollView>
          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >#PrototipeUndiksha</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFFF', //warna dasar hijau
    flex: 1,
    flexDirection: 'column'
  },
  header: { //header pada layar
    flex: 1,
    backgroundColor: '#00695C', //hijau tua
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  box: {
    flex: 8, // dasar
    backgroundColor: '#B2DFDB', //hijau muda
    flexDirection: 'column',
    alignItems: 'center'

  },

  input: {
      width: 370,
      height: 80,
      backgroundColor: '#EF5350', //merah agak muda
      margin: 10,
    //  borderRadius: 100
    },
    data: {
      width: 320,
      height: 300,
      backgroundColor: 'white', //putih kehijauan
      margin :10,
    },
    nama: {
      width: 320,
      height: 50,
      backgroundColor: 'white', //putih kehijauan
      margin :10,
    },
  footer: {
    flex: 1,
    backgroundColor: '#004D40', //hijau tua
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius : 10

  },
  text: {
    textAlign: 'center',
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 20
  },
  Button: {
    marginBottom: 20,
    backgroundColor: 'crimson',
    padding: 20,
    borderRadius: 3,
  },
  ButtonText:{
    textAlign: 'center',
    color: '#FFFFFF'
  }

});
export default Inputbaru;
