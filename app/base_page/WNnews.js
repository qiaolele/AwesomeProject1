/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 网易新闻——Text组件demo
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, PixelRatio} from 'react-native';

// 子组件——头部组件
class Header extends Component{
    render () {
        return (
            //作为一个伸缩容器，有且只有一个View
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>

        )
    }
}
// 子组件——列表组件
class List extends Component{
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        )
    }
}
// 子组件——新闻列表组件
/*
封装ImportantNews组件
      用this.props属性接收外部传入的参数
      增加onPress事件，当新闻被按下时通过bind调用show方法，弹出标题
      bind方法中： this表示上下文对象，类似于OC中的self
                this.props.news[i]  传递参数
      numberOfLines = {2}  表示显示2行，和OC中的差不多
      {this.props.news[i]}  获取传递数据
 */
class ImportantNews extends Component{

    show(title) {
       alert(title);
    }

    render (){
        let news = [];
        for(var i in this.props.news){
            let text = (
              <Text
                  onPress = {this.show.bind(this,this.props.news[i])}
                  numberOfLines = {3}
                  style = {styles.news_item}
                  key = {i}
              >{this.props.news[i]}</Text>
            );
            news.push(text);
        }

        return (
            <View>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        )
    }
}
// 父组件
class WnNews extends Component{
    render() {
        return (
            <View>
                <Header></Header>
                <List title="一线城市楼市退烧 有房源一夜跌价160万"></List>
                <List title="上海市民称墓地太贵买不起 买房存骨灰"></List>
                <List title="朝鲜再发视频：摧毁青瓦台 一切化作灰烬"></List>
                <List title="生活大爆料人物原型都好牛逼"></List>

                <ImportantNews
                    news={[
                        '解放军报报社大楼正在拆除 标识已被卸下（图）',
                        '韩国停签东三省52家旅行社 或为阻止朝鲜旅游创汇',
                        '南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻',
                        '防总部署长江防汛：以防御98年量级大洪水为目标',
                        '防总部署长江防汛：以防御98年量级大洪水为目标1'

                    ]}>
                </ImportantNews>
            </View>
        );
    }
}



// 定义样式
const styles = StyleSheet.create({
    // 公共样式
    flex: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3/PixelRatio.get(),
        borderBottomColor: "#ef2d36",
        alignItems: "center",
    },
    // 头部样式
    font: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    font_1: {
        color: "#cd1d1c",
    },
    font_2: {
        color: "#fff",
        backgroundColor: '#cd1d1c',
    },

    // 列表样式
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: "center",
    },
    list_item_font: {
        fontSize: 16,
    },
    // 新闻列表组件
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cd1d1c',
        marginLeft: 10,
        marginTop: 15,
    },
    news_item: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        lineHeight: 40,
    }

});


//将Travelnav组件导出
export default WnNews
