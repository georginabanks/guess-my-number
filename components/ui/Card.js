import {StyleSheet, View} from "react-native";
import colours from "../../util/colours";

export default function Card({ children }) {
	return (
			<View style={ styles.container }>
				{ children }
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 16,
		marginTop: 12,
		marginHorizontal: 24,
		backgroundColor: colours.primaryDark,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25
	}
});