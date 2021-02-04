import { View, Text, StatusBar, SafeAreaView, VirtualizedList,FlatList, Animated } from 'react-native';
import React, {useState, useEffect, useRef} from 'react'
import Login from '../Login';
import WelcomeAuth from '../WelcomeAuth';
import Card from '../../components/atoms/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils';
import { LittleCard, Skeleton, SkeletonLittle } from '../../components';
import { IconMenu } from '../../assets';
import { useSelector } from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';




const MainScreen = ({navigation, route}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const globalState = useSelector((state) => state);
    const [getContent, setContent] = useState({
        content: [],
        loader : 1,
    })

    const [greet, setGreet] = useState('');

    useEffect(() => {
        fadeIn()
        greeting();
        setTimeout(() => {
            getArticles()
        }, 2500);
        setTimeout(() => {
            fadeOut()
        }, 6000);
        setTimeout(() => {
            fadeIn()
            setGreet('For You')
        }, 7000);
        return () => {

        }
    }, [])

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start();
      };
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start();
      };

    const getFullName = async () => {
        const userData = await AsyncStorage.getItem('fname');
        return userData;
    }

    const greeting = async () => {
        const name = await getFullName();
        let time = new Date;
        let hour = time.getHours();
        if (hour >= 18 && hour <= 23 || hour >= 0 && hour <= 3) {
            setGreet(`Good Night, ${name.split(' ', 1)}`)
        } else if (hour >= 4 && hour <= 10){
            setGreet(`Good Morning, ${name.split(' ', 1)}`)
        } else if (hour >= 11 && hour <= 17){
            setGreet(`Good Afternoon, ${name.split(' ', 1)}`)
        }
    }

    const getArticles = () => {
        const url = `${globalState.url}Api/Article/getAllArticle`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setContent({
                content: res.data,
            });
        })
        .catch(error => {
            console.error(error);
            alert(error)
        });
    }

    const simplefiedTitle = (titl) => {
        let title = titl.split(" ");
        if(title.length <= 11){
            return titl;
        } else {
            return titl
        }
    }

    const goTo = (screen, id) => {
        // navigation.navigate(screen,{id_article: id});
        const reset = CommonActions.reset({
            index: 0,
            routes:[
                {
                    name: screen,
                    params: {
                        id_article: id
                    }
                }
                // navigation.navigate({
                //     routeName: screen,
                //     params: {
                //         id_article: id
                //     }
                // })
            ],
            // routes:[{name: screen}]
        });
        navigation.dispatch(reset);
    }
        return (
            <View>
                <ScrollView>
                    <View style={styles.page.horizontal}>
                        {/* <View style={styles.page.header}>
                            <IconMenu width={15} height={25}/>
                        </View> */}
                        <Animated.View style={{opacity: fadeAnim}}>
                            <Text style={styles.text.titleWhite}>{greet}</Text>
                        </Animated.View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {getContent.loader == 1 ? <Skeleton/> : null}
                            {getContent.loader == 1 ? <Skeleton/> : null}
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                {getContent.content.map(item => {
                                    return (
                                        <Card key={item.id_article} onPress={() => goTo('DetailScreen', item.id_article)} title={simplefiedTitle(item.article_title)} imageUrl={item.article_image} timeRead={item.article_est_time_read}/>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.page.vertical}>
                        <Text style={styles.text.title}>Recent Articles</Text>
                        <ScrollView vertical={true}>
                            {getContent.loader == 1 ? <SkeletonLittle/> : null}
                            {getContent.loader == 1 ? <SkeletonLittle/> : null}
                            {getContent.content.map(item => {
                                    return (
                                        <LittleCard key={item.id_article} title={simplefiedTitle(item.article_title)} imageUrl={item.article_image} timeRead={item.article_est_time_read}/>
                                    )
                                })}
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
            paddingLeft: 20,
            paddingBottom: 20,
            paddingTop: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: colors.default,
            elevation: 40,
        },
        vertical: {
            paddingHorizontal: 20,
            marginTop: -10,
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
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
            marginTop: 20,
            paddingVertical: 13,
        },
    }
}
export default MainScreen