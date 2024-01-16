import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import colours from "./util/colours";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    
    const [userNumber, setUserNumber] = useState(undefined);
    const [gameOver, setGameOver] = useState(true);
    
    function handleChosenNumber( chosenNumber ) {
        setUserNumber( chosenNumber );
    }
    
    function handleGameOver() {
        setGameOver(true);
    }
    
    let screen = <StartGameScreen onChosenNumber={ handleChosenNumber } />
    
    if ( userNumber ) {
        screen = <GameScreen userNumber={ userNumber } handleGameOver={ handleGameOver } />
    }
    
    if ( gameOver ) {
        screen = <GameOverScreen />
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
