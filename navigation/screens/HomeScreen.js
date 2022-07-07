
import * as React from 'react';
import { Image, View, Text, StatusBar, Linking } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen({ }) {
    const routeRedirect = () =>{
      Linking.openURL('https://www.amanuelreda.me/');
    }
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView
            style={{
                 flex: 1,
                 backgroundColor: 'black',
                 paddingTop: insets.top
                }}
            >
            <View style={{ 
                flex: 1, 
                alignItems: 'center'
                }}>
                <Image
                        source={require('../screens/images/perry.png')}
                        style={{
                        width: 150,
                        height: 150,
                        borderRadius: 75,
                        overflow: 'hidden',
                        borderWidth: 3,
                        borderColor: 'black',
                        alignItems: 'center'
                        }}
                    />
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}
                > Amanuel Reda </Text>
            </View>
            <View style={{ 
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 50
                }}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}
                > Education </Text>
                <Text
                    style={{ fontSize: 18, color: 'blue', textAlign:'left' }}
                >Santa Monica College</Text>
                <Text
                    style={{ fontSize: 16, color: 'gold', textAlign:'left' }}
                >California State University - Long Beach</Text>
            </View>
            <View style={{ 
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}
                > Exprience </Text>
                <Text
                    style={{ fontSize: 16, color: 'gold', textAlign:'left' }}
                >Computer Science Tutor</Text>
                <Text
                    style={{ fontSize: 16, color: 'yellow', textAlign:'left' }}
                >SnapEngineeringAcademy</Text>
            </View>
            <View style={{ 
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}
                > Portfolio </Text>
                <Button icon="link" mode="contained" onPress={routeRedirect}>
                    Here
                </Button>
            </View>
            <View style={{ 
                alignItems: 'center',
                justifyContent: 'center'
                }}>
               <Text
                    style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                > Snap Exprience </Text>
                <Slideshow 
                dataSource={[
                     {url: 'https://user-images.githubusercontent.com/92605110/159113015-1a3f0217-9ce0-4915-8985-75ac1baee4fa.png'},
                     require('../screens/images/image1.jpg'),
                     require('../screens/images/image1.jpg'),
                     require('../screens/images/image1.jpg'),
                     require('../screens/images/image1.jpg'),
                ]}/>
            </View>
        </SafeAreaView>
    );
}