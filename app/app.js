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
import FlexboxRN from './pages/base_page/flexboxRN';
import SearchDate from './pages/base_page/searchDate';
import TravelNav from './pages/base_page/travelNav';
import WnNews from './pages/base_page/WNnews';
import ListViewSimple from './pages/base_page/listViewSimple'
import ListViewSecondHeader from './pages/base_page/listViewSecondHeader';
import ListViewGride from './pages/base_page/listViewGride';


// 组件实例
import FetchDateCom from './pages/components/fetchDateCom';
import FlatListCom from './pages/components/flatListCom';
import ImageCom from './pages/components/ImageCom';
import ListViewFetchCom from './pages/components/listViewFetchCom';
import PickerCom from './pages/components/pickerCom';
import ProgressBarCom from './pages/components/progressBarCom';
import WebViewCom from './pages/components/webViewCom';

// 无状态组件实例
import DrawerLayoutAndroidCom from './pages/purecomponent/drawerLayoutAndroidCom';
import ScrollViewCom from './pages/purecomponent/scrollViewCom';
import SearchInputFileCom from './pages/purecomponent/searchTextInputCom';
import TouchableCom from './pages/purecomponent/touchableCom';
import ViewPageAndroidCom from './pages/purecomponent/viewPagerAndroidCom';

// 第三方插件
import SwiperRN from './pages/thirdplugin/swiperRN';

// const Header = require('app/base_page/WNnews'); es5的写法


export default class Root extends Component {
    render(){
        return (
            // 一个出口只能导出一个View组件，如果使用flex布局，最大容器一定要设置flex
            // 如果此时只有一个组件，就可以不要外面的View组件容器
            <View>
                {/*基础实例API*/}

                {/*<BaseDemo></BaseDemo>*/}
                {/*flex布局*/}
                {/*<FlexboxRN></FlexboxRN>*/}
                {/*动态搜索框*/}
                {/*<SearchDate></SearchDate>*/}
                {/*旅游导航*/}
                {/*<TravelNav></TravelNav>*/}
                {/*网易新闻Text组件*/}
                {/*<WnNews></WnNews>*/}
                {/*<ListViewSimple></ListViewSimple>*/}

                {/*<ListViewSecondHeader></ListViewSecondHeader>*/}
                {/*多列的效果*/}
                <ListViewGride></ListViewGride>




                {/*组件实例*/}

                {/*动态加载数据Fetch组件*/}
                {/*<FetchDateCom></FetchDateCom>*/}
                {/*长列表flatList组件*/}
                {/*<FlatListCom></FlatListCom>*/}
                {/*图片Image组件*/}
                {/*<ImageCom></ImageCom>*/}
                {/*长列表ListView组件*/}
                {/*<ListViewFetchCom></ListViewFetchCom>*/}
                {/*下拉列表框Picker组件*/}
                {/*<PickerCom></PickerCom>*/}
                {/*进度条ProgressBar组件*/}
                {/*<ProgressBarCom></ProgressBarCom>*/}
                {/*混合模式移动应用WebView组件*/}
                {/*<WebViewCom></WebViewCom>*/}

                {/*无状态组件实例*/}
                {/*抽屉导航器DrawerLayoutAndroid组件*/}
                {/*<DrawerLayoutAndroidCom></DrawerLayoutAndroidCom>*/}
                {/*滚动视图ScrollView组件*/}
                {/*<ScrollViewCom></ScrollViewCom>*/}
                {/*搜索框InputFile组件*/}
                {/*<SearchInputFileCom></SearchInputFileCom>*/}
                {/*触摸事件Touchable组件*/}
                {/*<TouchableCom></TouchableCom>*/}
                {/*允许在子视图之间左右翻页的容器ViewPageAndroid组件*/}
                {/*<ViewPageAndroidCom></ViewPageAndroidCom>*/}


                {/*第三方库——轮播插件*/}
                {/*<SwiperRN></SwiperRN>*/}
            </View>
        );
    }
};
