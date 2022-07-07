
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
                 alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 40
                }}
            >
            <View style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20
                }}>
                <View style={{ 
                flex: 1,
                flexDirection: 'row'
                }}>
                    <Image
                            source={require('../screens/images/Snapchatlogo.png')}
                            style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            overflow: 'hidden',
                            borderWidth: 3,
                            borderColor: 'black',
                            alignItems: 'center'
                            }}
                        />
                    <Text
                            style={{paddingTop:30, fontSize: 20, fontWeight: 'bold', color: 'yellow' }}
                        > Snap Inc. Experience </Text>
                </View>
                <View>
                    <Slideshow 
                            dataSource={[
                                {
                                    url: require('../screens/images/image7.jpg')
                                },
                                {
                                    url: require('../screens/images/image2.jpg')
                                },
                                {
                                    url: require('../screens/images/image3.jpg')
                                },
                                {
                                    url: require('../screens/images/image4.jpg')
                                },
                                {
                                    url: require('../screens/images/image5.jpg')
                                },
                                {
                                    url: require('../screens/images/image6.jpg')
                                },
                                {
                                    url: require('../screens/images/image1.jpg')
                                },
                                {
                                    url: require('../screens/images/image8.jpg')
                                },
                                {
                                    url: require('../screens/images/image9.jpg')
                                }
                            ]}
                            height = {600}
                           />
                </View>
            </View>
        </SafeAreaView>
    );
}