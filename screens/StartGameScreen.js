import PrimaryButton from "../components/ui/PrimaryButton";
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import colours from "../util/colours";

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
			<View style={ styles.inputContainer }>
				<TextInput style={ styles.input } maxLength={ 2 } keyboardType={'number-pad'} value={ enteredNumber }
						   onChangeText={ handleInputNumber } />
				
				<View style={ styles.buttonContainer }>
					<View style={ styles.button }>
						<PrimaryButton onPress={ resetInputNumber }>Cancel</PrimaryButton>
					</View>
					<View style={ styles.button }>
						<PrimaryButton onPress={ handleConfirm }>Confirm</PrimaryButton>
					</View>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: 'center',
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: colours.primaryDark,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25
	},
	input: {
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
	},
	button: {
		flex: 1
	}
});