/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Fetch组件和—— 获取动态数据——ListView组件垂直滚动的数据列表
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,ListView,ActivityIndicator,TouchableOpacity} from 'react-native';

let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ListViewGride extends Component{
    // 在构造函数中初始化变量
    constructor(props){
        super(props);//这句不可省略
        this.state = {
            // 创建DataSource对象
            dataSource: new ListView.DataSource({
                //判断是否进行每行数据刷新
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
    alertImage(movie){
        alert(movie.title);
    }
    // 加载到数据之后页面渲染结构
    //默认有三个参数 数据，sectionID没有定义默认固定的，rowID是索引值
    renderMovie(movie,sectionID,rowID) {

        return (
            <TouchableOpacity onPress={this.alertImage.bind(this,movie)}>
                <View style={styles.container}>
                    <Image
                        source={{uri: movie.posters.thumbnail}}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.year}>{movie.year}年{rowID}</Text>
                </View>
            </TouchableOpacity>
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
                renderRow = {this.renderMovie.bind(this)}
                contentContainerStyle = {styles.list}
                style={styles.listView}
            />
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {
        borderWidth: 1,
        borderColor: '#099',
        width: 100,
        height: 100,
        backgroundColor: '#F5FCFF',
        margin:5,
        alignItems:'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius:16,
    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。
    container1: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        fontSize: 14,
        marginBottom: 8,

    },
    year: {
        fontSize: 14,

    },
});


//将AwesomeProject组件导出
export default ListViewGride
