/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 购物车详情页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from "react-navigation";
class detailPage extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        title: '详情页面',
        tabBarLabel: '详情页面',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('../../rescourse/img/pic2.jpg')
                }
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        },
    });

    render() {
        return(
            <Text>我的第二个tab标签</Text>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = detailPage;