import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils';
import { Button } from '../../components';

const ActionButton = ({title, onPress}) => {
    return (
        <View>
            <Button title={title} onPress={onPress} />
        </View>
    );
};

export default ActionButton;
