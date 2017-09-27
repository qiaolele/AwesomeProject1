/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: ProgressBarAndroid组件——进度条
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,ProgressBarAndroid} from 'react-native';



class ProgressBarAndroidCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View style={[styles.flex]}>
                <Text>ProgressBarAndroid组件——进度条</Text>
                {/*progress:当前的进度值0-1之间    styleAttr进度条的样式 Horizontal Small Large Inverse SmallInverse LargeInverse*/}
                <ProgressBarAndroid styleAttr="LargeInverse" />
                <Text>显示Picker选中框的value值{this.state.language}</Text>
            </View>
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
export default ProgressBarAndroidCom
