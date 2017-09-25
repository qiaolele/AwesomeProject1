import {AppRegistry,View,StyleSheet} from 'react-native';
import React, {Component} from 'react';

import BaseDemo from './app/base_page/baseDemo';
import FlexboxRN from './app/base_page/flexbox_reactNative';
import TravelNav from './app/base_page/travelNav';
import WnNews from './app/base_page/WNnews';
import SearchInputFile from './app/base_page/searchTextInput';
import SearchDate from './app/base_page/searchDate';
import ScrollViewRN from './app/base_page/scrollViewRN';
import Touchable from './app/base_page/touchableRN';
import Image from './app/base_page/ImageRN';
import Picker from './app/base_page/pickerRN';
import ProgressBar from './app/base_page/progressBarRN';
import DrawerLayoutAndroid from './app/base_page/drawerLayoutAndroidRN';

// const Header = require('app/base_page/WNnews'); es5的写法


export default class Root extends Component {
    render(){
        return (
            // 一个出口只能导出一个View组件，如果使用flex布局，最大容器一定要设置flex
            // 如果此时只有一个组件，就可以不要外面的View组件容器
            <View style={{flex:1}}>
                {/*基础例子*/}
                {/*<BaseDemo></BaseDemo>*/}
                {/*flex布局*/}
                {/*<FlexboxRN></FlexboxRN>*/}
                {/*旅游导航*/}
                {/*<TravelNav></TravelNav>*/}
                {/*网易新闻Text组件*/}
                {/*<WnNews></WnNews>*/}
                {/*搜索框InputFile组件*/}
                {/*<SearchInputFile></SearchInputFile>*/}
                {/*动态搜索框*/}
                {/*<SearchDate></SearchDate>*/}
                {/*ScrollView组件滚动视图*/}
                {/*<ScrollViewRN></ScrollViewRN>*/}
                {/*触摸事件组件*/}
                {/*<Touchable></Touchable>*/}
                {/*图片组件*/}
                {/*<Image></Image>*/}
                {/*下拉列表框组件*/}
                <Picker></Picker>
                {/*进度条组件*/}
                <ProgressBar></ProgressBar>
                {/*抽屉导航器组件*/}
                <DrawerLayoutAndroid></DrawerLayoutAndroid>
            </View>
        );
    }
};


// 注意，这里用引号括起来的'AwesomeProject1'必须和你init创建的项目名一致
//这个是整个项目的出口文件只能有一个
AppRegistry.registerComponent('AwesomeProject1', () => Root);