import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

const Icons = ({icons}) => {
    return(
        <View>
            <ImageBackground style={styles.images}>{icons}</ImageBackground>
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
