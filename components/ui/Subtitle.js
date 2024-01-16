import {StyleSheet, Text} from "react-native";
import colours from "../../util/colours";

export default function Subtitle({ children, style }) {
	return (
			<Text style={[ styles.text, style ]}>
				{ children }
			</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		color: colours.secondary,
		fontSize: 24
	}
});