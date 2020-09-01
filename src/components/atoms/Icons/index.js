import React from 'react';
import { View, Image, Text } from 'react-native';

const Icons = ({icons}) => {
    return(
        <View>
            <Image source={icons} />
        </View>
    );
};

const styles = {
    images: {
        width: 100,
        height: 100,
    },
};

export default Icons;
