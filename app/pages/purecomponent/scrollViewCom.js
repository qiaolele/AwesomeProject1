/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: ScrollView组件——滚动视图
 */

import React, { Component } from 'react';
import { StyleSheet,Text, ScrollView, Image,} from 'react-native';

class ScrollViewRN extends Component{
    render() {

        return (
            <ScrollView>
                <Text style={styles.fontSize}>Scroll me plz</Text>
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Text style={styles.fontSize}>If you like</Text>
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
                <Image source={require('../../rescourse/img/ico01_150127.png')} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 26,
    },


});


export default ScrollViewRN
