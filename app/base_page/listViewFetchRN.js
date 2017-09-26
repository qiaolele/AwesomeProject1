/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Fetch组件和—— 获取动态数据——ListView组件
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,ListView,ActivityIndicator} from 'react-native';

let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ListViewFetchCom extends Component{
    // 在构造函数中初始化变量
    constructor(props){
        super(props);//这句不可省略
        this.state = {
            // 创建DataSource对象
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }
    // 加载数据之前的页面
    renderLoadingView() {
        return (
            <View>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, {height: 80}]}
                    color='red'
                    size="large"
                />
                <Text>正在网络上获取电影数据……</Text>
            </View>
        )
    }
    // 加载到数据之后页面渲染结构
    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} onPress={this.aa}>标题：{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}年</Text>
                </View>
            </View>
        )
    }


    // 在组件被加载之后，componentDidMount 是 React 组件里面只会调用一次的函数。
    componentDidMount() {
        this.fetchData();
    }

    // 在React的工作机制下，setState实际上会触发一次重新渲染的流程，此时render函数被触发，发现this.state.movies不再是null这个方法将会负责处理数据的获取
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
        //调用了done()——这样可以抛出异常而不是简单的忽略
    }
    // 渲染页面进行判断
    render() {
        if( !this.state.loaded) {
            //如果loaded == null的情况，初始情况 渲染加载视图
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderMovie}
                style={styles.listView}
            />
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#f00',
        opacity: 0.6
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


//将AwesomeProject组件导出
export default ListViewFetchCom
