import { View, Text, StatusBar } from 'react-native';
import React from 'react'
import { colors } from '../../../utils';

const HeaderFaq = () => {
    return (
        <View style={styles.page.header}>
            <Text style={styles.text.titleWhite}>
                FAQ
            </Text>
        </View>
    );
    
}

const styles = {
    page: {
        header: {
            padding: 20,
            backgroundColor: colors.default,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 20
        }
    },
    text : {
        titleWhite: {
            marginTop: 4,
            fontSize: 24,
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
            marginTop: 20,
            paddingVertical: 13,
        }
    }
}
export default HeaderFaq;