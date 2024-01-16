import {StyleSheet, Text, View} from "react-native";
import colours from "../../util/colours";

export default function NumberContainer({ children }) {
	return (
			<View style={ styles.container }>
				<Text style={ styles.text }>{ children }</Text>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colours.secondary,
		borderRadius: 8,
		padding: 24,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: colours.secondary,
		fontSize: 36,
		fontWeight: 'bold'
	}
});