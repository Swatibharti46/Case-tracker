import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import VerifyAccountScreen from './VerifyAccountScreen';
import AccountVerifiedScreen from './AccountVerifiedScreen'; // Import new screen
import SuccessScreen from './screens/SuccessScreen';
<Stack.Screen name="Success" component={SuccessScreen} />


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
        <Stack.Screen name="AccountVerified" component={AccountVerifiedScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
