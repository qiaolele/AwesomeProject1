/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: menu——左侧菜单导航
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    Image,
    View,
} from 'react-native';
// 屏幕尺寸
const window = Dimensions.get('window');
// 图片
const uri = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/1735166522016060509185507.png';

class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,//自定义属性必须这样写
  };// 注意这里有分号

  render() {
    return (
        //如果用ScrollView包裹，一定要设置scrollsToTop为false
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri:uri }}/>
          <Text style={styles.name}>东方耀QQ昵称</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('关于作者')}
          style={styles.item}>
          关于作者
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('联系东方耀')}
          style={styles.item}>
          联系东方耀
        </Text>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 10,
    },
});

export default Menu;