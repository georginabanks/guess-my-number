import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import colours from "../util/colours";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ rounds, userNumber, handleStartNewGame }) {
	return (
			<View style={ styles.rootContainer }>
				<Title>GAME OVER!</Title>
				<View style={ styles.imageContainer }>
					<Image source={require('../assets/images/success.png')} style={ styles.image } />
				</View>
				<Text style={ styles.text }>
					Your phone needed <Text style={ styles.highlightedText }>{ rounds }</Text> rounds to guess the
					 number <Text style={ styles.highlightedText }>{ userNumber }</Text>.
				</Text>
				<View style={ styles.button }>
					<PrimaryButton onPress={ handleStartNewGame }>New Game</PrimaryButton>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: colours.primaryDark,
		overflow: "hidden",
		margin: 36
	},
	image: {
		width: '100%',
		height: '100%'
	},
	text: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center'
	},
	highlightedText: {
		fontFamily: 'open-sans-bold',
		color: colours.primary
	},
	button: {
		marginTop: 24
	}
});