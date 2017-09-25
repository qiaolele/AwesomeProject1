/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: TextInput组件——文本输入框——搜索框
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,TextInput} from 'react-native';

// 子组件——
class Search extends Component{
    render() {
        return (
            <View style={[styles.flex,styles.flexDirection]}>
                <View style={[styles.search_box,styles.flex]}>
                    <TextInput
                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                        defaultValue='你好'
                    ></TextInput>
                </View>
                <View style={[styles.search_btn]}>
                    <Text style={styles.search}>搜索</Text>
                </View>
            </View>
        );
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row',
    },
    search_box: {
        height: 45,
        borderWidth: 1,
        borderColor: '#f00',
        borderRadius: 5,
        marginLeft: 10,
        paddingLeft: 10,
    },
    search_btn: {
        width: 45,
        //设置为负数就会把输入框的右边框遮住，使用技巧
        marginLeft: -5,
        // marginLeft: 1,
        marginRight: 5,
        backgroundColor: '#23beef',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }

});


//将AwesomeProject组件导出
export default Search
