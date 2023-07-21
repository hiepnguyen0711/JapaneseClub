import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function App() {
  const baseUrl = 'http://127.0.0.1/api_tintuc.php?id=2';
  const [data, setData] = useState([]);
  useEffect(async () => {
   
    await axios.patch(baseUrl, {
      vatpham: '4 chai nước suối'
    }).then((res) => console.log(res))
    .catch((e) => console.log(e));

    await axios({
      method: 'get',
      url: baseUrl
    }).then((res) => {
      setData(res.data);
    }).catch((e) => {
      console.log(e);
    })
    
    
    
  }, []);
  const luckyBoxItem = (itemData) => {
    return(
      <View>
        <Text>{itemData.item.id}</Text>
        <Text>{itemData.item.vatpham}</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
          <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={luckyBoxItem}
          />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
