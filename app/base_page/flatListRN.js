/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: FlatList组件—— 长列表用于显示一个垂直的滚动列表，元素结构相近
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,FlatList,ScrollView,ActivityIndicator,Animated,Image} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class FlatListExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
        }
    }

    //网络请求
    fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.movies;
                let dataBlob = [];
                let i = 0;
                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                this.setState({
                    //复制数据源
                    dataArray: dataBlob,
                    isLoading: false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    //加载等待的view——进度条
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, {height: 80}]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
                </Text>
            </View>
        );
    }

    //返回itemView
    renderItemView({item}) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: item.value.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>标题：{item.value.title}</Text>
                    <Text style={styles.year}>{item.value.year}年</Text>
                </View>
            </View>

            /*<View>
                <Text style={styles.title}>name: {item.value.name} ({item.value.stargazers_count}
                    stars)</Text>
                <Text style={styles.content}>description: {item.value.description}</Text>
            </View>*/
        );
    }

    renderData() {
        return (
            <ScrollView >
                <Text >
                    Data:
                </Text>
                <AnimatedFlatList
                    data={this.state.dataArray}
                    renderItem={this.renderItemView}
                />
            </ScrollView>
        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据
        return this.renderData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,

    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

});
module.exports = FlatListExample;
