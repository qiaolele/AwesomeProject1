/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 购物车实例入口
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import { TabNavigator } from "react-navigation";
import AsyncStorage from './asyncStorage';
// import GoShapping from './goShapping';
import Detail from './detail';

const mainPage = TabNavigator({

    AsyncStorage: {
        screen: AsyncStorage,
        navigationOptions: {
            //默认参数
            title: '列表',
            tabBarLabel: '列表',
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
            }
        }
    },
    Detail: {
        screen: Detail,
        //以下参数也可放置在MinePage.js页面
        navigationOptions: {
            title: '详情',
            tabBarLabel: '详情',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('../../rescourse/img/pic1.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
}, {
    animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0F9C00', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#444', // TabBar 背景色
            height:50
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        },
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});
module.exports = mainPage;
