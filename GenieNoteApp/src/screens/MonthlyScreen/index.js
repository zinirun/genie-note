import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Monthly</Text>
            <Button
                title="Daily"
                onPress={() => {
                    props.navigation.navigate('Daily', {
                        userId: 1,
                    });
                }}
            />
        </View>
    );
};
