import {Alert, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween( min, max, exclude ) {
	const rndNum = Math.floor( Math.random() * ( max - min ) ) + min;
	
	if ( rndNum === exclude ) {
		return generateRandomBetween( min, max, exclude );
	} else {
		return rndNum;
	}
}

let min = 1;
let max = 100;

export default function GameScreen({ userNumber }) {
	
	const initialGuess = generateRandomBetween( min, max, userNumber );
	const [currentGuess, setCurrentGuess] = useState( initialGuess );
	
	function handleNextGuess( direction ) {
		if (( direction === 'lower' && currentGuess < userNumber ) || ( direction === 'higher' && currentGuess > userNumber )) {
			Alert.alert("Something's wrong!", 'You know what you did...', {
				text: "Sorry!", style: 'cancel'
			});
			return;
		}
		
		if ( direction === 'lower') {
			max = currentGuess;
		} else if ( direction === 'higher') {
			min = currentGuess + 1;
		}
		
		const newNumber = generateRandomBetween( min, max, currentGuess );
		setCurrentGuess( newNumber );
	}
	
	return (
			<View style={ styles.screen }>
				<Title>Opponent's Guess</Title>
				<NumberContainer>{ currentGuess }</NumberContainer>
				<View>
					<Text>Higher or lower?</Text>
					<View style={ styles.buttonContainer }>
						<PrimaryButton onPress={ handleNextGuess.bind( this, 'lower') }>-</PrimaryButton>
						<PrimaryButton onPress={ handleNextGuess.bind( this, 'higher') }>+</PrimaryButton>
					</View>
				</View>
				<View>
					{/*log rounds*/}
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		padding: 24,
		flex: 1
	},
	buttonContainer: {
		flexDirection: 'row'
	}
})