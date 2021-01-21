import React from 'react';
import {Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
    return (
        <TouchableHighlight
        style={styles.wrapper.component} onPress={onPress}>
        <Text
          style={styles.text.title}>
          {title}
        </Text>
      </TouchableHighlight>
    )
}

const styles = {
    wrapper : {
        component: {
            // paddingHorizontal: 100,
            backgroundColor: colors.default,
            borderRadius: 5,
            paddingVertical: 13,
        },
    },
    text : {
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
        }
    }
}

export default Button;