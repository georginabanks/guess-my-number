import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import colours from "./util/colours";

export default function App() {
    
    const [userNumber, setUserNumber] = useState(undefined);
    
    function handleChosenNumber( chosenNumber ) {
        setUserNumber( chosenNumber );
    }
    
    let screen = <StartGameScreen onChosenNumber={ handleChosenNumber } />
    
    if ( userNumber ) {
        screen = <GameScreen userNumber={ userNumber } />
    }
    
    return (
            <LinearGradient colors={[ colours.primaryDark, colours.secondary ]} style={ styles.appContainer }>
                <ImageBackground source={require('./assets/images/fire.jpg')} resizeMode={'cover'} style={ styles.appContainer } imageStyle={ styles.imageBackground }>
                    <StatusBar style={'light'} />
                    <SafeAreaView style={ styles.appContainer }>{ screen }</SafeAreaView>
                </ImageBackground>
            </LinearGradient>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    imageBackground: {
        opacity: 0.2
    }
});
