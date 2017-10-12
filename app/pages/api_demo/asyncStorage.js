/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
    Button,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import GoShappingPage from './goShapping';
import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    static navigationOptions = ({navigation,screenProps}) => ({
        title: 'welcome1',
    });
    static defaultProps = {
        url: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png',
        title: '默认标题',
    };  // 注意这里有分号
    static propTypes = {
        url: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
    };  // 注意这里有分号
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
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {

        flex: 1,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 16,
    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginBottom: 8,

    },
    year: {
        fontSize: 14,

    },
});
//进行导航的注册
const SimpleApp = StackNavigator({
    List: {screen: ListPage},
    GoShapping: {screen: GoShappingPage},
});
module.exports = SimpleApp;