import { View, Text, Pressable, StyleSheet } from 'react-native';
import colours from "../../util/colours";

export default function PrimaryButton({ children, onPress }) {
	return (
			<View style={ styles.outerContainer }>
				<Pressable style={({ pressed }) => pressed ? [ styles.innerContainer, styles.pressed ] : styles.innerContainer }
						   android_ripple={{ color: colours.primaryDark }} onPress={ onPress }>
					<Text style={ styles.text }>{ children }</Text>
				</Pressable>
			</View>
	)
}

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden'
	},
	innerContainer: {
		backgroundColor: colours.primaryLight,
		paddingVertical: 8,
		paddingHorizontal: 16
	},
	pressed: {
		opacity: 0.75
	},
	text: {
		color: 'white',
		textAlign: 'center'
	}
})