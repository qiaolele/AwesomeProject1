/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 抽屉用于导航切换组件 DrawerLayoutAndroid
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,DrawerLayoutAndroid} from 'react-native';



class DrawerLayoutAndroidCom extends Component{

    render() {
        var navigationView = (
            <View style={{flex:1,backgroundColor: '#099'}}>
                <Text style={{margin: 10,fontSize: 15,textAlign: 'left'}}>我是抽屉！</Text>
            </View>
        )

        return (
            <DrawerLayoutAndroid
                //指定抽屉的宽度，也就是从屏幕边缘拖进的视图的宽度
                drawerWidth = {100}
                //抽屉的位置
                drawerPosition = {DrawerLayoutAndroid.positions.Right}
                //此方法用于渲染一个可以从屏幕一边拖入的导航视图——回调函数。
                renderNavigationView = {() => navigationView}
            >
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={{margin: 10,fontSize: 15,textAlign: 'right'}}>Hello——导航器</Text>
                <Text style={{margin: 10,fontSize: 15,textAlign: 'right'}}>React Native World！</Text>
            </View>
            </DrawerLayoutAndroid>

        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    }
});


//将AwesomeProject组件导出
export default DrawerLayoutAndroidCom
