import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    SafeAreaView 
} from 'react-native';
import { mainTheme } from '../../themes/mainTheme';
import Header from './components/Header';

const Swap = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header backTab="Dashboard" />
        </SafeAreaView>
    )
}

export default Swap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainTheme.MEDIUM_SPRING_GREEN,
        height: '80%',
    }
})