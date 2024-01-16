import {StyleSheet, Text, View} from "react-native";
import colours from "../../util/colours";

export default function LogItem({ round, guess }) {
	return (
			<View style={ styles.listItem }>
				<Text style={ styles.text }>#{ round }</Text>
				<Text style={ styles.text }>Guess: { guess }</Text>
			</View>
	)
}

const styles = StyleSheet.create({
	listItem: {
		borderWidth: 1,
		borderColor: colours.primaryLight,
		borderRadius: 40,
		padding: 12,
		marginVertical: 8,
		backgroundColor: colours.secondary,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 2,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 2
	},
	text: {
		fontFamily: 'open-sans'
	}
});