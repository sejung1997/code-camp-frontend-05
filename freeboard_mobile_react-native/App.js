import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet,Image , View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {WebView} from 'react-native-webview';
export default function App() {

  const onPressBtn = () => {
    alert('버튼을 클릭했습니다')
  }
  return (
    <WebView source={{uri: "https://sejung1997.shop/"}}/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start       working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button title='상품등록하기' onPress={onPressBtn}/>
    //   <TouchableOpacity onPress={}>
    //     <Image/>

    //   </TouchableOpacity>
    // </View>
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
