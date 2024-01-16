import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useCallback, useState} from "react";
import GameScreen from "./screens/GameScreen";
import colours from "./util/colours";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
    
    const [userNumber, setUserNumber] = useState(undefined);
    const [gameOver, setGameOver] = useState(true);
    const [rounds, setRounds] = useState(0);
    
    let [ fontsLoaded, fontLoadingError ] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
    
    console.log('fontsLoaded', fontsLoaded);
    console.log('fontLoadingError', fontLoadingError);
    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    function handleChosenNumber( chosenNumber ) {
        setUserNumber( chosenNumber );
        setGameOver(false);
    }
    
    function handleGameOver( numOfRounds ) {
        setGameOver(true);
        setRounds(numOfRounds);
    }
    
    function handleStartNewGame() {
        setUserNumber(undefined);
        setGameOver(false);
        setRounds(0);
    }
    
    let screen = <StartGameScreen onChosenNumber={ handleChosenNumber } />
    
    if ( userNumber ) {
        screen = <GameScreen userNumber={ userNumber } handleGameOver={ handleGameOver } />
    }
    
    if ( gameOver && userNumber ) {
        screen = <GameOverScreen rounds={ rounds } userNumber={ userNumber } handleStartNewGame={ handleStartNewGame } />
    }
    
    return (
            <LinearGradient colors={[colours.primaryDark, colours.secondary]} style={styles.appContainer} onLayout={ onLayoutRootView }>
                <ImageBackground source={require('./assets/images/fire.jpg')} resizeMode={'cover'} style={styles.appContainer} imageStyle={styles.imageBackground}>
                    <StatusBar style={'light'}/>
                    <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
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
