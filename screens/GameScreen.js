import {Alert, StyleSheet, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Subtitle from "../components/ui/Subtitle";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";

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

export default function GameScreen({ userNumber, handleGameOver }) {
	
	const initialGuess = generateRandomBetween( 1, 100, userNumber );
	const [currentGuess, setCurrentGuess] = useState( initialGuess );
	
	useEffect(() => {
		if ( currentGuess === userNumber ) {
			handleGameOver();
		}
	}, [ currentGuess, userNumber, handleGameOver ]);

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
				<Card>
					<Subtitle style={ styles.subtitle }>Higher or lower?</Subtitle>
					<View style={ styles.buttonContainer }>
						<View style={ styles.button }>
							<PrimaryButton onPress={ handleNextGuess.bind( this, 'lower') }>
								<Ionicons name={'md-remove'} size={24} color={'white'} />
							</PrimaryButton>
						</View>
						<View style={ styles.button }>
							<PrimaryButton onPress={ handleNextGuess.bind( this, 'higher') }>
								<Ionicons name={'md-add'} size={24} color={'white'} />
							</PrimaryButton>
						</View>
					</View>
				</Card>
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
	subtitle: {
		marginBottom: 12
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	button: {
		flex: 1
	}
})