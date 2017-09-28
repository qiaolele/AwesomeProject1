/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: webView组件——混合模式移动应用
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions,WebView} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// 父组件
class WebViewCom extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            //作为一个伸缩容器，有且只有一个View
            <View style={styles.flex}>
                <WebView
                    style={{height:HEIGHT,width:WIDTH}}
                    source={{uri:'https://m.jd.com/'}}
                    injectedJavaScript={"alert('我是乔乐乐')"}//不起作用
                >

                </WebView>
            </View>
        );
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

});

//将WebViewCom组件导出
export default WebViewCom
