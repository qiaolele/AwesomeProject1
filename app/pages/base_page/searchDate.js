/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: TextInput组件——文本输入框——动态搜索
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,TextInput,PixelRatio} from 'react-native';

let onePT = 1/PixelRatio.get();//最小单位一个宽度——为了适配小屏幕

// 子组件
class Search extends Component{
    // show boolean this.state
    // value 显示的值
    // 构造函数，定义两个变量并且给了默认值
    constructor(props){
        super(props);
        this.state = {
            show: false,
            value: null,
        };
    }
    // 影藏内容框
    hide(val) {
        this.setState(
            {
                show: false,
                value: val,
            }
        )
    }
    // 获取内容
    getValue(text) {
        this.setState({
            show: true,
            value: text,
        });
    }
    render() {
        return (
            <View style={styles.flex}>
                {/*搜索框结构*/}
                <View style={styles.flexDirection}>
                    <View style={[styles.search_box,styles.flex]}>
                        <TextInput
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            keyboardType="web-search"
                            placeholder="请输入关键词"
                            value={this.state.value}//获取textInput的值
                            onChangeText={this.getValue.bind(this)}//实时监测textInput输入文本框的值的变化去调用getValue方法
                        ></TextInput>
                    </View>
                    <View style={[styles.search_btn]}>
                        <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
                    </View>
                </View>

                {/*搜索内容结构——判断是否显示三目运算符*/}
                {this.state.show ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this,this.state.value+'加东方QQ')}
                              style={styles.item} numberOfLine={1}>{this.state.value}加东方QQ</Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'园街')}
                              style={styles.item} numberOfLine={1}>{this.state.value}园街</Text>
                        <Text onPress={this.hide.bind(this,80 + this.state.value+'综合商店')}
                              style={styles.item} numberOfLine={1}>80{this.state.value}综合商店</Text>
                        <Text onPress={this.hide.bind(this,'桃' + this.state.value)}
                              style={styles.item} numberOfLine={1}>{this.state.value}桃</Text>
                        <Text onPress={this.hide.bind(this,'东方耀' + this.state.value)}
                              style={styles.item} numberOfLine={1}>{this.state.value}东方耀</Text>
                    </View>
                    : null}
            </View>
        );
    }
}

class Search_state extends Component {
    render() {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search></Search>
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
    topStatus: {
        marginTop: 25,
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
    },
    result: {
        marginTop: onePT,
        marginLeft: 18,
        marginRight: 5,
        height:200,
    }

});


//将AwesomeProject组件导出
export default Search_state
