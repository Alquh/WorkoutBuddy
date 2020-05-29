import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// I like to put all of my authentication classes into own folder :)
import googleAuthentication from "../authentication/google";

class LoginScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
			accessToken: null,
		};
	}

	signInWithGoogleAsync = async () => {
		const response = await googleAuthentication();

		if (response.success) {
			this.setState({ authenticated: true, accessToken: response.result });
		} else if (response.result === "error") {
			alert("Oops. Something went wrong.");
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>LoginScreen</Text>

				{this.state.authenticated ? (
					<Text>You've signed in with Google.</Text>
				) : (
					<Button
						title="Sign in with Google"
						onPress={() => this.signInWithGoogleAsync()}
					/>
				)}
			</View>
		);
	}
}
export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
