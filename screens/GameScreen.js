import {Alert, FlatList, StyleSheet, View, Text, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Subtitle from "../components/ui/Subtitle";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import LogItem from "../components/game/LogItem";

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
	const [rounds, setRounds] = useState([]);
	
	useEffect(() => {
		if ( currentGuess === userNumber ) {
			handleGameOver( rounds[-1] );
		}
	}, [ currentGuess, userNumber, handleGameOver ]);
	
	useEffect(() => {
		min = 1;
		max = 100;
	}, []);

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
		setRounds([ ...rounds, newNumber ]);
		setCurrentGuess( newNumber );
	}
	
	return (
			<View style={ styles.screen }>
				<Title>Opponent's Guess</Title>
				<View style={ styles.numberContainer }>
					<NumberContainer>{ currentGuess }</NumberContainer>
				</View>
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
				<View style={ styles.roundsContainer }>
					<FlatList data={ rounds }
							  renderItem={( itemData ) => {
								  return <LogItem guess={itemData.item} round={( rounds.length - itemData.index )}/>
							  }}
							  keyExtractor={(item) => item}
					/>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		marginTop: 100,
		paddingHorizontal: 24,
		flex: 1
	},
	numberContainer: {
		marginTop: 16
	},
	subtitle: {
		marginBottom: 12
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	button: {
		flex: 1
	},
	roundsContainer: {
		flex: 1,
		padding: 20
	}
})