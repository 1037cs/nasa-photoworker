import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectionScreen from '../screens/selectionScreen/SelectionScreen'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import GalleryScreen from '../screens/galleryScreen/GalleryScreen'
import PhotoScreen from '../screens/photoScreen/PhotoScreen'
import { primary } from '../../ui/colors'

export type StackParamList = {
	Selection: undefined
	Gallery: {
		title: string
		photos: []
		date: string
	}
	Photo: { src: string; id: string }
}

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: primary
	}
}

const Stack = createNativeStackNavigator<StackParamList>()

export const Navigation = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator>
				<Stack.Screen
					name='Selection'
					component={SelectionScreen}
					options={{
						title: 'Select Camera and Date',
						headerTitleStyle: {
							fontFamily: 'dosis-sb'
						},
						headerStyle: {
							backgroundColor: primary
						},
						headerShadowVisible: false
					}}
				/>
				<Stack.Screen
					name='Gallery'
					component={GalleryScreen}
					options={{
						headerStyle: {
							backgroundColor: primary
						},
						headerShadowVisible: false,
						headerBackTitleVisible: false
					}}
				/>
				<Stack.Screen
					name='Photo'
					component={PhotoScreen}
					options={{
						headerStyle: {
							backgroundColor: '#000'
						},
						headerShadowVisible: false,
						headerBackTitleVisible: false,
						headerTintColor: '#FFF'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
