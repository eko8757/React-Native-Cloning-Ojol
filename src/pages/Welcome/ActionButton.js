import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils';
import { Button } from '../../components';

const ActionButton = ({title}) => {
    return (
        <View>
            <Button title={title}/>
        </View>
    );
};

export default ActionButton;
