/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Touchable组件——处理触摸事件，可点击
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,} from 'react-native';



class Touchable extends Component{
    // 获取内容
    show(text) {
        alert(text);
    }
    render() {
        return (
            <View style={styles.flex}>
                {/*使用TouchableHighlight来制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。*/}
                <TouchableHighlight onPress={this.show.bind(this,'欢迎学习React Native技术')}
                    underlayColor="#f00"
                >
                    <Text style={styles.item}>欢迎学习React Native技术——TouchableHightlight</Text>
                </TouchableHighlight>

                {/*TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。*/}
                <TouchableOpacity onPress={this.show.bind(this,'欢迎学习React Native技术')}>
                    <Text style={styles.item}>欢迎学习React Native技术——TouchableOpacity</Text>
                </TouchableOpacity>

                {/*在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似墨水涟漪的视觉效果。*/}
                <TouchableWithoutFeedback onPress={this.show.bind(this,'欢迎学习React Native技术')}>
                    <Text style={styles.item}>作者东方耀Q：293232121——TouchableWithoutFeedback</Text>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop:25,
    },
    item:{
        fontSize:18,
        color:'#434343',
        marginLeft:5,
        marginTop:10,
    },

});


//将AwesomeProject组件导出
export default Touchable
