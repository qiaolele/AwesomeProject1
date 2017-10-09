/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-swiper——第三方库轮播组件
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,Dimensions} from 'react-native';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')


const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}
// 父组件
class ReactNativeSwiper extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    /*componentDidMount() {
        this.setState({
            items: [
                {title: 'Hello Swiper',css:styles.slide1},
                {title: 'Beautiful',css:styles.slide2},
                {title: 'And example',css:styles.slide3}
            ]
        })
    }
*/
    render() {
        return (
            //基础例子
            /*<View style={styles.wrapperHeight}>
                <Swiper style={styles.wrapper}
                        horizontal={false}
                        autoplay
                        // showsButtons={false}//控制向前向后按钮是否显示
                    // autoplay={true}//控制动画是否自动播放
                    // autoplayTimeout={1}//控制自动播放时间间隔，默认是2.5
                        height={300}//这个包裹容器高度智能使用属性设置，不能通过style样式设置
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }}/>}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: '#007aff',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }}/>}
                >
                    <View style={[styles.slide1,styles.pageStyle]}>
                        <Image style={{width:200,height:300}}
                               resizeMode="stretch"
                               source={require('../../img/pic1.jpg')}
                        />
                    </View>
                    <View style={[styles.slide2,styles.pageStyle]}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={[styles.slide3,styles.pageStyle]}>
                        <Image source={require('../../img/pic3.jpg')}></Image>
                    </View>
                    <View style={[styles.slide3,styles.pageStyle]}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                    <View style={[styles.slide1,styles.pageStyle]}>
                        <Image source={require('../../img/pic2.jpg')}></Image>
                    </View>
                </Swiper>
            </View>*/

            //动态获取数据
            /*<View style={styles.wrapperHeight}>
                <Swiper  height={400}  horizontal={false} autoplay>
                    {this.state.items.map((item, key) => {
                        return (
                            <View key={key} style={item.css}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        )
                    })}
                </Swiper>
            </View>*/

            // 数字轮播
            <View style={styles.wrapperHeight}>
                <Swiper
                    style={styles.wrapper}
                    renderPagination={renderPagination}
                    loop={true}
                    // autoplay
                >
                    <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                        <Image style={styles.image} source={require('../../rescourse/img/pic1.jpg')} />
                        <Text style={styles.textStyle}>Aussie tourist dies at Bali hotel</Text>
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                        <Image style={styles.image} source={require('../../rescourse/img/pic2.jpg')} />
                        <Text style={styles.textStyle}>Big lie behind Nine’s new show</Text>
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                        <Image style={styles.image} source={require('../../rescourse/img/pic3.jpg')} />
                        <Text style={styles.textStyle}>Why Stone split from Garfield</Text>
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                        <Image style={styles.image} source={require('../../rescourse/img/pic4.jpg')} />
                        <Text style={styles.textStyle}>Learn from Kim K to land that job</Text>
                    </View>
                </Swiper>
            </View>


        );
    }
}

// 定义样式
const styles = StyleSheet.create({
    wrapperHeight: {
      height:300,
        //旋转90度
        // transform:[{rotate: "90deg"}],
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd6eb',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pageStyle: {
        //旋转-90度
        // transform:[{rotate: "-90deg"}]
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    },
    textStyle: {
        color: '#ff0',
        fontSize: 20,
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: '#ccc',
    },
    image: {
        width,
        flex:1,
    }
});


//将Travelnav组件导出
export default ReactNativeSwiper
