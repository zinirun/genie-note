import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MonthlyScreen from './screens/MonthlyScreen';
import DailyScreen from './screens/DailyScreen';

const Stack = createStackNavigator();

export default () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Daily"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'dodgerblue',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                    <Stack.Screen
                        name="Monthly"
                        component={MonthlyScreen}
                        options={{
                            title: 'Monthly Screen',
                        }}
                    />
                    <Stack.Screen
                        name="Daily"
                        component={DailyScreen}
                        initialParams={{
                            userId: 0,
                        }}
                        options={{
                            title: 'Daily Screen',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
    );
};
