/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Fetch组件和—— 获取动态数据——ListView组件垂直滚动的数据列表实例1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,ListView,ActivityIndicator,TouchableOpacity} from 'react-native';

class ListViewFetchCom extends Component{
    // 在构造函数中初始化变量
    constructor(props){
        super(props);//这句不可省略
        this.state = {
            // 创建DataSource对象
            dataSource: new ListView.DataSource({
                //判断是否进行每行数据刷新
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
        };
    }
    // 在组件被加载之后，componentDidMount 是 React 组件里面只会调用一次的函数。
    componentDidMount() {
        this.fetchData();
    }
    renderMovie(rowData,sectionID,rowID){
        return (
            <Text>{rowData}+{sectionID}+{rowID}</Text>
        )
    }

    // 在React的工作机制下，setState实际上会触发一次重新渲染的流程，此时render函数被触发，发现this.state.movies不再是null这个方法将会负责处理数据的获取
    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(['row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
        })
        //调用了done()——这样可以抛出异常而不是简单的忽略
    }
    // 渲染页面进行判断
    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                // renderRow = {(rowData) => <Text>{rowData}</Text>}
                renderRow = {this.renderMovie.bind(this)}
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
