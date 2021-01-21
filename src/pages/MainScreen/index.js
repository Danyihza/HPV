import { View, Text, StatusBar } from 'react-native';
import React from 'react'
import Login from '../Login';
import WelcomeAuth from '../WelcomeAuth';
import Card from '../../components/atoms/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils';
import { LittleCard } from '../../components';
import { IconMenu } from '../../assets';



const MainScreen = ({navigation, route}) => {
        return (
            <View>
                <ScrollView vertical={true}>
                    <View style={styles.page.horizontal}>
                        <View style={styles.page.header}>
                            <IconMenu width={15} height={25}/>
                        </View>
                        <Text style={styles.text.titleWhite}>For You</Text>
                        <View>
                            <ScrollView horizontal={true}>
                            <Card onPress={() => navigation.navigate('WelcomeAuth')}/>
                            <Card/>
                            <Card/>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.page.vertical}>
                        <Text style={styles.text.title}>Recent Articles</Text>
                        <ScrollView vertical={true}>
                            <LittleCard/>
                            <LittleCard/>
                            <LittleCard/>
                            <LittleCard/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    
}

const styles = {
    page: {
        header: {
            flex:1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
            paddingRight: 20,
            justifyContent: 'space-between',
        },
        horizontal: {
            // paddingHorizontal: 20,
            paddingLeft: 20,
            paddingBottom: 20,
            paddingTop: 20,
            // height: '50%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: colors.default,
            elevation: 40,
        },
        vertical: {
            paddingHorizontal: 20,
            // height: '50%',
            marginTop: -10,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            backgroundColor: colors.background
        }
    },
    space: (value) => {
        return {
          height: value,
        };
    },
    text : {
        title: {
            marginTop: 4,
            fontSize: 24,
            fontFamily: 'TypoGotikaBoldDemo',
            color: colors.dark,
            marginTop: 20,
            paddingVertical: 13,
        },
        titleWhite: {
            marginTop: 4,
            fontSize: 24,
            fontFamily: 'TypoGotikaBoldDemo',
            color: '#ffffff',
            marginTop: 20,
            paddingVertical: 13,
        },
    }
}
export default MainScreen