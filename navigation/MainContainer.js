import * as React from 'react';
import { NavigationContainer,DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
// Screens
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import SnapExprience from './screens/SnapExprience';

//Screen names
const homeName = "Home";
const contactsName = "Contact";
const snapexprience = "SnapExperience"

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <SafeAreaProvider>
    <NavigationContainer
      theme={DarkTheme}
    >
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === contactsName) {
            iconName = focused ? 'list' : 'list-outline';

          }
          else if (rn === snapexprience) {
            iconName = focused ? 'camera' : 'camera-outline';

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>

        <Tab.Screen options={{headerShown: false}} name={homeName} component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name={contactsName} component={ContactsScreen} />
        <Tab.Screen options={{headerShown: false}} name={snapexprience} component={SnapExprience} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default MainContainer;