import PrimaryButton from "../components/ui/PrimaryButton";
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import colours from "../util/colours";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Subtitle from "../components/ui/Subtitle";

export default function StartGameScreen({ onChosenNumber }) {
	
	const [enteredNumber, setEnteredNumber] = useState('');
	
	function handleInputNumber( text ) {
		setEnteredNumber( text );
	}
	
	function resetInputNumber() {
		setEnteredNumber('');
	}
	
	function handleConfirm() {
		const chosenNumber = parseInt( enteredNumber );
		 
		if ( isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99 ) {
			Alert.alert('Invalid Number', 'Number has to be between 1 and 99.',
					[{ text: 'Okay', style: 'destructive', onPress: resetInputNumber }])
			return;
		}
		
		onChosenNumber( chosenNumber );
	}
	
	return (
			<View style={ styles.rootContainer }>
				<Title>Guess My Number</Title>
				<Card>
					<Subtitle>Enter a Number</Subtitle>
					<TextInput style={ styles.numberInput } maxLength={ 2 } keyboardType={'number-pad'} value={ enteredNumber }
							   onChangeText={ handleInputNumber } />
					
					<View style={ styles.buttonContainer }>
							<PrimaryButton onPress={ resetInputNumber }>Cancel</PrimaryButton>
							<PrimaryButton onPress={ handleConfirm }>Confirm</PrimaryButton>
					</View>
				</Card>
			</View>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: colours.secondary,
		borderBottomWidth: 2,
		color: colours.secondary,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonContainer: {
		flexDirection: 'row'
	}
});