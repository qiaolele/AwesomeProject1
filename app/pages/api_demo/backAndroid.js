/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    BackHandler,
    ToastAndroid,
    View
} from 'react-native';
var count=2;
class BackAndroidDemo extends Component {
    //组件挂载的时候调用
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',function(){
            if(count>=1){
                ToastAndroid.show('收到点击返回键信息...'+count,ToastAndroid.SHORT);
                count--;
                return true;
            }else{
                return false;
            }
            // 获取当前view
            // var currentView=AwesomeProject1.getCurrentView();
            // if(currentView.history.length>1)
            // {
            //     BackHandler.goBack();//非首页返回上一级
            // }
            // else{
            //     BackHandler.exitApp();//首页点返回键退出应用
            // }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    BackHandler模块使用实例
                </Text>
                <Text style={styles.instructions}>
                    请点击返回键查看效果...
                </Text>
            </View>
        );
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
module.exports = BackAndroidDemo;