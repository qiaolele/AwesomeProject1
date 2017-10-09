/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-tab-navigator——第三方库Tab导航组件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


class HomeUI extends Component {

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {

            selectedTab: 'home',//当前选择的tab默认选择home页面
        };
    }

    render() {

        //home页面内容
        var homeView = (

            <View style={[styles.flex, styles.center,{backgroundColor:'#ffff0044'}]}>
                <Text style={{ fontSize: 22 }}>我是主页</Text>
            </View>
        );

        //设置页面内容
        var settingView = (

            <View style={[styles.flex, styles.center,{backgroundColor:'#ff000044'}]}>
                <Text style={{ fontSize: 22 }}>我是设置页面</Text>
            </View>
        );


        return (

            <TabNavigator
                tabBarStyle={{ height: 65,overflow: 'hidden' }}
                sceneStyle={{paddingBottom: 65}}
                hidesTabTouch={false}//按下去的透明度效果true消失，false显示（默认）
            >
                {/*标签项*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="主页"
                    renderIcon={() => <Image style={styles.img} source={require('../../rescourse/img/pic1.jpg') }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={require('../../rescourse/img/pic2.jpg') }/>}
                    badgeText="200"

                    onPress={() => this.setState({ selectedTab: 'home' })}

                >
                    {homeView}
                </TabNavigator.Item>
                {/*标签项*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'setting'}
                    title="设置"
                    renderIcon={() => <Image style={styles.img} source={require('../../rescourse/img/pic3.jpg') }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={require('../../rescourse/img/pic4.jpg') }/>}
                    renderBadge={() => <Text>东方耀</Text>}
                    onPress={() => this.setState({ selectedTab: 'setting' })}

                >

                    {settingView}
                </TabNavigator.Item>


            </TabNavigator>


        );

    }



}


const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    img: {
        width: 40,
        height: 33,
        borderWidth: 1,
        borderColor: '#f00',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },



});


export default HomeUI;
