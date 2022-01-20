/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Converter from './Screens/Converter';
import RdxConverter from './Screens/UsingRedux';
import Home from './Screens/Home';
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

class App extends Component
{
  render(){
    return(
      // <Home/>
      <Provider store={Store}>
      {/* <Converter/> */}
      <RdxConverter/>
      {/* <Home/> */}
      </Provider>
    )
  }
}


// const styles = StyleSheet.create({
// });

export default App;
