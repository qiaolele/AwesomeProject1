/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Picker组件——下拉列表框
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Picker,} from 'react-native';



class PickerCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View style={[styles.flex,{marginTop: 45}]}>
                <Text>Picker组件——下拉列表框</Text>
                <Picker
                    //显示选择内容
                    selectedValue = {this.state.language}
                    //选择内容时调用此方法
                    onValueChange = {value => this.setState({language:value})}
                    // onValueChange = {(value) => this.setState({language:value})}
                    //Picker样式 dialog弹窗样式默认  dropdown显示在下边
                    mode = "dialog"
                    //设置Title 当设置为dialog时有用
                    prompt={'请选择'}
                    style = {{color: '#f00'}}
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="C语言" value="c" />
                <Picker.Item label="PHP开发" value="php" />

                </Picker>
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
export default PickerCom
