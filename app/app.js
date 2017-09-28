/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 程序入口
 */
import {View,StyleSheet,Text} from 'react-native';
import React, {Component} from 'react';

// 基础实例API
import BaseDemo from './pages/base_page/baseDemo';
import FlexboxRN from './pages/base_page/flexbox_reactNative';
import TravelNav from './pages/base_page/travelNav';
import WnNews from './pages/base_page/WNnews';

// 组件实例
import SearchInputFile from './pages/purecomponent/searchTextInput';
import SearchDate from './pages/base_page/searchDate';
import ScrollViewRN from './pages/purecomponent/scrollViewRN';
import Touchable from './pages/purecomponent/touchableRN';
import Image from './pages/components/ImageRN';
import Picker from './pages/components/pickerRN';
import ProgressBar from './pages/components/progressBarRN';
import DrawerLayoutAndroid from './pages/purecomponent/drawerLayoutAndroidRN';
import ViewPageAndroid from './pages/purecomponent/viewPagerAndroidRN';

// 无状态组件实例
import FetchDateRN from './pages/components/fetchDateRN';
import ListViewFetchRN from './pages/components/listViewFetchRN';
import FlatListRN from './pages/components/flatListRN';
import WebViewRN from './pages/components/webViewRN';


// 第三方插件
import SwiperRN from './pages/third_plugIn/swiperRN';

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
                {/*<Picker></Picker>*/}
                {/*进度条组件*/}
                {/*<ProgressBar></ProgressBar>*/}
                {/*抽屉导航器组件*/}
                {/*<DrawerLayoutAndroid></DrawerLayoutAndroid>*/}

                {/*<ViewPageAndroid></ViewPageAndroid>*/}
                {/*动态加载数据*/}
                {/*<FetchDateRN></FetchDateRN>*/}
                {/*flatList组件长列表*/}
                {/*<FlatListRN></FlatListRN>*/}
                {/*长列表*/}
                {/*<ListViewFetchRN></ListViewFetchRN>*/}

                {/*<WebViewRN></WebViewRN>*/}

                {/*<View><Text>dfkdfd</Text></View>*/}
                {/*第三方库——轮播插件*/}
                <SwiperRN></SwiperRN>
            </View>
        );
    }
};
