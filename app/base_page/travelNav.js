/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: flexbox布局demo
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, PixelRatio} from 'react-native';

// 父组件
class Travelnav extends Component{
    render() {
        return (
            //作为一个伸缩容器，有且只有一个View
            <View style={styles.flex}>
                <View style={styles.container}>

                    {/*下面的作为伸缩项目*/}
                    <View style={[styles.item,styles.center,styles.lineLeftRight]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>

                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text>客栈，公寓</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}



// 定义样式
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ff0067',
        marginTop: 200,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        borderRadius: 5,
        padding: 2,
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        //水平垂直居中设置
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex: {
        flex: 1,//默认缩写写法——将外层view的组件向外伸展占满整个屏幕，平铺
    },
    font: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    lineLeftRight: {
        // 边框按屏幕的像素
        borderLeftWidth: 1/PixelRatio.get(),
        borderRightWidth: 1/PixelRatio.get(),
        borderColor: '#fff',
    },
    lineCenter: {
        borderBottomWidth: 1/PixelRatio.get(),
        borderColor: '#fff',
    }

});


//将Travelnav组件导出
export default Travelnav
