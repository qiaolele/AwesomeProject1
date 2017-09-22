/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 基础例子
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// 子组件——静态props属性
// props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state。
class Greeting extends Component{
    render() {
        return (
            <Text>Hello {this.props.name} !</Text>
        );
    }
}

// 子组件——动态闪烁文字
class Blink extends Component {
    constructor(props) {
        // 调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
        // super(props)的目的：在constructor中可以使用this.props
        super(props);
        this.state = {showText:true };
// 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        },1000);
    }

    render(){
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        )
    }
}





// 父组件
class AwesomeProject extends Component{
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Text>Hello World!</Text>

                {/*图片*/}
                <Image source={pic} style={{width: 193, height: 110}} />

                {/*props属性
                <Greeting name="Rexxar" />
                <Greeting name="Jaina" />
                <Greeting name="Valeera" />

                state动态文字
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />

                添加样式
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue,styles.red]}>bigblue then red</Text>
                <Text style={[styles.red,styles.bigblue]}>red then bigblue</Text>

                指定宽高
                <View style={{width: 50,height: 50,backgroundColor: 'powderblue'}} />
                <View style={{width: 100,height: 100,backgroundColor: 'skyblue'}} />
                <View style={{width: 150,height: 150,backgroundColor: 'steelblue'}} />*/}
            </View>


            /*<View style={{flex:1,flexDirection: 'column',justifyContent: 'space-around',alignItems: 'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            </View>*/

            /*<View style={styles.container}>
                <Text style={styles.welcome}>Welcome to ReactNative!乔乐乐的第5课</Text>
                <Text style={styles.instructions}>To get started,edit index.androids.js</Text>
                <Text style={styles.instructions}>Shake or press menu button for dev menu</Text>
            </View>*/


        );
    }
}



// 定义样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f0ff'
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color:'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
});


//将AwesomeProject组件导出
export default AwesomeProject
