import React, { useEffect } from 'react'
import { Container, Image } from './Photoscreen.styles'
import { Pressable, Share } from 'react-native'
import ShareIcon from '../../../assets/icons/share.svg'
import BackIcon from '../../../assets/icons/back-white.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '../../components/Navigation'
import { PhotoScreenTitle } from './PhotoScreenTitle'

const onPressHandler = async (url: string) => {
	await Share.share({
		url: url
	})
}

type Props = NativeStackScreenProps<StackParamList, 'Photo'>

const PhotoScreen: React.FC<Props> = ({ navigation, route }) => {
	const src = route.params.src

	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => <PhotoScreenTitle id={route.params.id} />,
			headerRight: () => (
				<Pressable onPress={() => onPressHandler(src)}>
					<ShareIcon />
				</Pressable>
			),
			headerLeft: () => (
				<Pressable onPress={() => navigation.goBack()}>
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
