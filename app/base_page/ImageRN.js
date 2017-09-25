/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Image组件——图片的引用
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,
    TouchableOpacity,} from 'react-native';


let imgs = [
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'http://js.ibaotu.com/revision/img/logo.png',
    'http://js.ibaotu.com/revision/img/float_feedback.png'

]

class ImageCom extends Component{
    render() {
        return (
            <View style={styles.flex}>
                <MyImageCom imgs={imgs}></MyImageCom>
            </View>
        );
    }
}

class MyImageCom extends Component{
    //source = {{uri:this.state.imgs[this.state.count]}}——网络图片使用方法
    //source = {require('./aaa.png')}——本地图片使用方式
    // 构造方法
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            imgs: this.props.imgs,
        }
    }
    // 上一页按钮
    goPreview(){
        let count = this.state.count;
        count --;
        if(count >= 0){
            this.setState({
                count:count,
            })
        }
    }
    // 下一页按钮
    goNext(){
        let count = this.state.count;
        count ++;
        if(count < this.state.imgs.length){
            this.setState({
                count: count,
            })
        }
    }

    render() {
        return (
            <View style={[styles.flex,{alignItems:'center'}]}>
                {/*设置图片为背景*/}
                {/*<Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={{flex:1,width:200, height:100, resizeMode: Image.resizeMode.stretch}}>*/}
                    {/*<Text style={{marginTop: 30, backgroundColor: 'red'}}>下面是背景图片</Text>*/}
                {/*</Image>*/}
                <View style={styles.image}>
                    <Image style={styles.img}
                           resizeMode ="contain"//contain:图片拉伸  充满空间 cover:等比拉伸 stretch:保持原有大小
                           source={{uri: this.state.imgs[this.state.count]}}
                    />
                    <Image source={require('../../img/ico01_150127.png')}></Image>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview.bind(this)}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>




            </View>
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089ff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 20,
    },
    btns: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    img: {
        height: 150,
        width: 200,
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 5,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    }


});


//将AwesomeProject组件导出
export default ImageCom
