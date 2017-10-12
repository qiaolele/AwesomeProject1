/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 购物车结算页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
class GoShappingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: 0,
            data: [],
        };
    }
    static navigationOptions = ({navigation,screenProps}) => ({
        title: '购物',
    });
    render() {
        const { params } = this.props.navigation.state;
        //第二次render的时候 data不为空了
        let data = this.state.data;
        let price = this.state.price;
        let list = [];
        for (let i in data) {
            price += parseFloat(data[i].price);
            list.push(
                <View style={[styles.row, styles.list_item]} key={i}>

                    <Text style={styles.list_item_desc}>
                        {data[i].title}
                        {data[i].desc}
                    </Text>

                    <Text style={styles.list_item_price}>人民币: {data[i].price}</Text>
                </View>
            );
        }

        let str = null;
        if (price) {
            str = ',共' + price.toFixed(2) + '元';
        }



        return (
            <ScrollView style={{ marginTop: 10 }}>
                {list}

                <Text style={styles.btn}>支付{str}</Text>
                <Text style={styles.clear} onPress={this.clearStorage.bind(this) }>清空购物车</Text>

            </ScrollView>
        );


    }


    componentDidMount() {
        let _that = this;
        AsyncStorage.getAllKeys(
            function (err, keys) {
                if (err) {
                    //TODO 存储数据出错
                    //return ;
                }
                //keys是字符串数组
                AsyncStorage.multiGet(keys, function (err, result) {
                    //得到的结构是二维数组
                    //result[i][0]表示我们存储的键   result[i][1]表示我们存储的值
                    let arr = [];
                    for (let i in result) {
                        arr.push(JSON.parse(result[i][1]));
                    }

                    _that.setState(
                        {
                            data: arr,
                        }
                    );


                });
            }
        );
    }

    clearStorage() {
        // 使用reset action重置路由——返回的时候清空缓存
        // const {dispatch} = this.props.navigation;
        // const resetAction = NavigationActions.reset({
        //     index: 0,//指定显示数组内的路由// 注意不要越界
        //     actions: [
        //         NavigationActions.navigate({ routeName: 'GoShapping'}),// 栈里的路由信息会从 Home->HomeTwo 变成了 Bill->BillTwo
        //         //NavigationActions.navigate({ routeName: 'others',params:{user: 'xiongtm'}}),
        //     ]
        // });
        // dispatch(resetAction);

        let _that = this;
        AsyncStorage.clear(function (err) {
            if (!err) {
                _that.setState({
                    data: [],
                    price: 0,
                });

                alert('购物车已经清空');
            }
        });
    }


}
const styles = StyleSheet.create({
    list_item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderWidth: 1,
        height: 30,
        borderRadius: 3,
        borderColor: '#ddd',
    },
    list_item_desc: {
        flex: 2,
        fontSize: 15,
    },

    list_item_price: {
        flex: 1,
        fontSize: 15,
        textAlign: 'right',
    },
    clear: {
        marginTop: 10,
        backgroundColor: '#FF7200',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 10,
        lineHeight: 24,
        height: 33,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
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
module.exports = GoShappingPage;