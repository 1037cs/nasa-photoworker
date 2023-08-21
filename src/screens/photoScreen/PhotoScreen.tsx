import React, { useEffect } from 'react'
import { Container, Image } from './Photoscreen.styles'
import { Pressable, Share, Text, View } from 'react-native'
import ShareIcon from '../../../assets/icons/share.svg'
import BackIcon from '../../../assets/icons/back-white.svg'

const Title = ({ id }) => {
	return (
		<View>
			<Text
				style={{
					color: '#FFF',
					fontFamily: 'terminal-dosis',
					lineHeight: 22,
					fontSize: 13,
					textAlign: 'center'
				}}
			>
				Photo ID
			</Text>
			<Text
				style={{
					color: '#FFF',
					fontFamily: 'dosis-sb',
					lineHeight: 22,
					fontSize: 18,
					textAlign: 'center'
				}}
			>
				{id}
			</Text>
		</View>
	)
}

const onPressHandler = async (url: string) => {
	const result = await Share.share({
		url: url
	})

	if (result.action === Share.sharedAction) {
		if (result.activityType) {
			// shared with activity type of result.activityType
		} else {
			// shared
		}
	} else if (result.action === Share.dismissedAction) {
		// dismissed
	}
}

const PhotoScreen = ({ navigation, route }) => {
	const src = route.params.src

	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Title id={route.params.id} />,
			headerRight: () => (
				<Pressable onPress={() => onPressHandler(src)}>
					<ShareIcon />
				</Pressable>
			),
			headerLeft: () => (
				<Pressable onPress={() => navigation.goBack(null)}>
					<BackIcon width={24} height={24} />
				</Pressable>
			)
		})
	}, [])

	return (
		<Container>
			<Image source={{ uri: src }} />
		</Container>
	)
}

export default PhotoScreen
