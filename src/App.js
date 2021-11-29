import React, {Components} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

import stylesApp from './App.styles';
import stylesBage from './components/Badge/Badge.styles';
import stylesProductCard from './components/ProductCard/ProductCard.styles';
import stylesProductInput from './components/Input/Input.styles';
import stylesButton from './components/Button/Button.styles';

const renderItem = ({item}) => (
  <Text>
    {item.productName} {item.productPrice}
  </Text>
);

export default class App extends Components {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: 0,
      productTime: '',
      products: [{}],
    };
  }

  render() {
    return (
      <SafeAreaView style={stylesApp.main_contanier}>
        <View style={stylesBage.badge_container}>
          <TouchableOpacity style={stylesBage.button}>
            <Text style={stylesBage.title}>Artan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesBage.button}>
            <Text style={stylesBage.title}>Azalan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesBage.button}>
            <Text style={stylesBage.title}>Tarih</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesProductCard.list_container}>
        <FlatList
          data={this.state.products}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
        </View>

        <View style={stylesProductInput.input_contanier}>
          <Text style={stylesProductInput.input_labels}>Name</Text>
          <TextInput
            style={stylesProductInput.input_text}
            onChangeText={(text) => {
              this.setState({productName: text});
            }}
            value={this.state.text}></TextInput>
          <Text style={stylesProductInput.input_labels}>Price</Text>
          <TextInput
            style={stylesProductInput.input_text}
            onChangeText={(text) => {
              this.setState({productPrice: text});
            }}
            value={this.state.text}></TextInput>
          <TouchableOpacity
            style={stylesButton.btn}
            onPress={() => {
              this.setState({
                  products: this.state.products.concat({
                  productName: this.state.productName,
                  productPrice: this.state.productPrice,
                }),
              });
            }}>
            <Text style={stylesButton.button}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}