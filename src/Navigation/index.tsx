import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from '../Utils/Interface/StackScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {StackScreens?.map((el) => (
                    <Stack.Screen
                        key={el?.key}
                        name={el?.name}
                        component={el?.component}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation