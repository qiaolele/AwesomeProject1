/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-side-menu——第三方库侧边栏导航组件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Menu from './Menu.js';//导入 菜单 组件

const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';

class HomeUI extends Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            isOpen: false,//侧导航是否打开默认，false是否
            selectedItem: '关于作者',
        };
    }
    // 开关
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    // 更新开关状态
    updateMenuState(isOpen) {
        this.setState({ isOpen: isOpen });
    }

    // 菜单回掉函数
    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }
    render() {
        //onItemSelected是Menu的一个属性，通过该属性来传递变化的值，就是选择了哪个菜单
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        console.log('render')
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen) }>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload, {'\n'}
                        Cmd+Control+Z for dev menu
                    </Text>
                    <Text style={[styles.instructions, { color: 'red' }]}>
                        当前选中的菜单是: {this.state.selectedItem}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.toggle() }>
                    <Image
                        source={{ uri: uri_image_menu, width: 32, height: 32, }} />
                </TouchableOpacity>

            </SideMenu>
        );
    }



}


class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this) }
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },



});

export default HomeUI;

