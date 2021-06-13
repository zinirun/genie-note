import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    const { params } = props.route;
    const { userId } = params;

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Daily</Text>
            <Text>UserID: {userId}</Text>
            <Button
                title="Monthly"
                onPress={() => {
                    props.navigation.navigate('Monthly');
                }}
            />
            <Button
                title="Change the title"
                onPress={() => {
                    props.navigation.setOptions({
                        title: 'Changed!',
                        headerStyle: {
                            backgroundColor: 'pink',
                        },
                        headerTintColor: 'red',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'purple',
                        },
                    });
                }}
            />
        </View>
    );
};
