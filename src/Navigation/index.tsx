import React, { Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from '@/Utils/Interface/StackScreen';
import { SuspenseLoader } from '@/Components';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={<SuspenseLoader />}>
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
            </Suspense>
        </NavigationContainer>
    )
}

export default RootNavigation