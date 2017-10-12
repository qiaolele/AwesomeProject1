/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 日期组件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerAndroid,
} from 'react-native';

class DatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: 'default',
            // presetDate: new Date(2016, 3, 5),
            // allDate: new Date(2020, 4, 5),
            // simpleText: '选择日期,默认今天',
            // minText: '选择日期,不能比今日再早',
            // maxText: '选择日期,不能比今日再晚',
            // presetText: '选择日期,指定2016/3/5',
        };

    }


    componentWillMount() {
        let self = this;
        let today = new Date();//获取当前时间
        let theMinDate = new Date(2015, 1, 1);
        let theMaxDate = new Date(2025, 1, 1);
        let option = {
            date: today,
            minDate: theMinDate,//可选的最小日期
            maxDate: theMaxDate,//可选的最大日期
        };
        // 一个方法
        DatePickerAndroid.open(option).then(
            result => {
                if (result.action === DatePickerAndroid.dismissedAction) {
                    self.setState(
                        {
                            result: '用户没有选择日期',//两种情况，当用户点击了cancle或者点击了物理返回键会触发
                        }
                    );

                } else {
                    self.setState(
                        {
                            result: '用户选择了' + result.year + '年' + (result.month + 1) + '月' + result.day + '日',
                        }
                    );

                }


            }
        ).catch(
            error => {
                console.log('出错了:' + error);

            }
        );

    }




    render() {
        return (
            <View style={[styles.flex, styles.center]}>
                <Text style={{ fontSize: 18, color: 'red' }}>返回结果：{this.state.result}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});
module.exports = DatePicker;