import React, { useCallback, useEffect, useState } from 'react'
import { Navigation } from './src/components/Navigation'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					'dosis-md': require('./assets/fonts/Dosis-Medium.ttf'),
					'dosis-sb': require('./assets/fonts/Dosis-SemiBold.ttf'),
					'terminal-dosis': require('./assets/fonts/TerminalDosis-Regular.ttf')
				})
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Navigation />
		</View>
	)
}
