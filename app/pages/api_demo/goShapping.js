import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native';
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = GoShappingPage;