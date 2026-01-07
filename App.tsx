/**
 * Football Field Rental App
 * Application de location de terrains de football
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import FieldListScreen from './src/screens/FieldListScreen';
import FieldDetailsScreen from './src/screens/FieldDetailsScreen';
import BookingScreen from './src/screens/BookingScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#2e7d32" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#2e7d32',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FieldList"
              component={FieldListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FieldDetails"
              component={FieldDetailsScreen}
              options={{ title: 'Détails du terrain' }}
            />
            <Stack.Screen
              name="Booking"
              component={BookingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
