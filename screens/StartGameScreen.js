import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet, TextInput, View } from 'react-native';

export default function StartGameScreen() {
	return (
			<View>
				<TextInput />
				<PrimaryButton>Cancel</PrimaryButton>
				<PrimaryButton>Confirm</PrimaryButton>
			</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 16,
		marginTop: 100
	}
});