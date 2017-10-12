/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 购物车商品列表页面
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    AsyncStorage,
    TouchableOpacity,
    View,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import GoShappingPage from './goShapping';
import DatedPickerPage from './datePickerAndroid';
import DatedTimerPage from './dateTimerAndroid';
import Dimensions from 'Dimensions';
import AwesomeProject1 from "../../../index.ios";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var count=2;
const Model = [
    {
        id: '1',
        title: '猕猴桃1',
        desc: '12个装',
        price: 99,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '2',
        title: '牛油果2',
        desc: '6个装',
        price: 59,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '3',
        title: '猕猴桃3',
        desc: '3个装',
        price: 993,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '4',
        title: '猕猴桃4',
        desc: '4个装',
        price: 994,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '5',
        title: '猕猴桃5',
        desc: '5个装',
        price: 995,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '6',
        title: '猕猴桃6',
        desc: '6个装',
        price: 996,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },

];

class Item extends Component {

    render() {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image resizeMode='contain'
                           style={styles.img}
                           source={{ uri: this.props.url }}
                    >

                        <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>

                    </Image>
                </TouchableOpacity>
            </View>
        );
    }
}
class ListPage extends Component {
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
        });
    }
    static navigationOptions = ({navigation,screenProps}) => ({
        title: '详情页面',
        tabBarLabel: '详情页面',
    });
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        let list = [];
        for (let i in Model) {
            if (i % 2 === 0) {
                //两个等号 ：不判断类型
                //三个等号：判断类型
                let row = (
                    <View style={styles.row} key={i}>
                        <Item title={Model[i].title}
                              url={Model[i].url}
                              press={this.press.bind(this, Model[i]) }

                        ></Item>
                        <Item title={Model[parseInt(i) + 1].title}
                              url={Model[parseInt(i) + 1].url}
                              press={this.press.bind(this, Model[parseInt(i) + 1]) }
                        ></Item>
                    </View>
                );
                list.push(row);
            }
        }
        let count = this.state.count;
        let str = null;
        if (count) {
            str = ',共' + count + '件商品';
        }
        return (
            <ScrollView style={{ marginTop: 10 }}>
                {list}
                <Text onPress={() => navigate('GoShapping')} style={styles.btn}>去结算{str}</Text>
                <Text onPress={() => navigate('DatedPickerPage')} style={styles.btn}>去选选择日期</Text>
                <Text onPress={() => navigate('DatedTimerPage')} style={styles.btn}>去选择时间</Text>
            </ScrollView>
        );

    }
    press(data) {
        this.setState({
            count: this.state.count + 1,
        });
        //AsyncStorage异步存储
        AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data), function (err) {
            if (err) {
                //TODO：存储出错
                alert(err);


            } else {
                //alert('保存成功');
            }
        });
    }
    //生成随机ID：GUID 全局唯一标识符（GUID，Globally Unique Identifier）是一种由算法生成的二进制长度为128位的数字标识符
    //GUID生成的代码来自于Stoyan Stefanov
    genId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }).toUpperCase();
    }
    componentDidMount() {
        let _that = this;

        //AsyncStorage.clear(
        //    function(err){
        //
        //    }
        //);
        AsyncStorage.getAllKeys(
            function (err, keys) {
                if (err) {
                    //TODO:存储取数据出错
                    //给用户提示错误信息
                    console.log(err);
                } else {
                    console.log('读取成功了的个数：'+keys.toString());
                }
                _that.setState({

                    count: keys.length,
                });
            }
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        flex: 1,
        backgroundColor: '#FF7200',
        height: 33,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 24,
        marginTop: 40,
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    img: {
        backgroundColor: 'transparent',
    },
    item_text: {
        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 25,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 74,
    },
    item: {
        flex: 1,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 5,
        height: 100,
    },
});
//进行导航的注册
const SimpleApp = StackNavigator({
    List: {screen: ListPage},
    GoShapping: {screen: GoShappingPage},
    DatedPickerPage: {screen: DatedPickerPage},
    DatedTimerPage: {screen: DatedTimerPage},
});
module.exports = SimpleApp;