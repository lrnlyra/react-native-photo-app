/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Camera from 'react-native-camera';

export default class ReactNativePhotoApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					First picture app
				</Text>
				<Text style={styles.instructions}>
					You can now take a picture :
				</Text>
				<View style={styles.cameraContainer}>
					<Camera
						ref={(cam) => {
							this.camera = cam;
						}}
						style={styles.cameraPreview}
						aspect={Camera.constants.Aspect.fill}>
						<Text style={styles.cameraCapture} onPress={this.takePicture.bind(this)}></Text>
					</Camera>
				</View>
			</View>
		);
	}
	takePicture() {
		const options = {};
		//options.location = ...
		this.camera.capture({metadata: options})
		.then((data) => console.log(data))
		.catch(err => console.error(err));
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#dd9e00',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333'
	},
	cameraContainer: {
		flex: 1,
		margin: 15
	},
	cameraPreview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	cameraCapture: {
		backgroundColor: '#dd9e00',
		borderRadius: 45,
		width: 45,
		height: 45,
		marginBottom: 20,
		borderWidth: 2,
		borderColor: '#fff'
	}
});

AppRegistry.registerComponent('ReactNativePhotoApp', () => ReactNativePhotoApp);
