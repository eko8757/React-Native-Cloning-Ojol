import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils';
import { ButtonSmall } from '../../components';

const ButtonBanner = ({title, onPress}) => {
    return (
        <View>
            <ButtonSmall title={title} onPress={onPress} />
        </View>
    );
};

export default ButtonBanner;
