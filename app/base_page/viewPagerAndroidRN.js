/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: ViewPagerAndroid组件—— 允许在子视图之间左右翻页的容器，适用于轮播图
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,ViewPagerAndroid,Image} from 'react-native';

class ViewPageAndroidCom extends Component{
    render() {
        return (
            <ViewPagerAndroid
                initialPage = {0}
                style={[styles.flex,styles.viewPageInfo]}
            >
                <View style={styles.center}>
                    <Text style={styles.fontStyle2}>第一页</Text>
                </View>
                <View style={styles.center}>
                    <Image source={require('../../img/pic2.jpg')}></Image>
                </View>
                <View style={styles.center}>
                    <Image source={require('../../img/pic3.jpg')}></Image>
                </View>
                <View style={styles.center}>
                    <Image source={require('../../img/pic4.jpg')}></Image>
                </View>
                <View style={styles.center}>
                    <Text style={styles.fontStyle3}>第五页</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'column',
    },
    viewPageInfo: {
        height:200,
        backgroundColor: '#ccc',
        opacity: 0.6,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontStyle1: {
        fontSize: 12,
        color: '#f00'
    }
    ,
    fontStyle2: {
        fontSize: 20,
        color: '#0f0'
    }
    ,
    fontStyle3: {
        fontSize: 30,
        color: '#00f'
    }
});


//将AwesomeProject组件导出
export default ViewPageAndroidCom
