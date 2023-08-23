import React, { useEffect } from 'react'
import { Container, Image } from './GalleryScreen.styles'
import { FlatList, Pressable } from 'react-native'
import BackIcon from '../../../assets/icons/back-black.svg'
import Title from './Title'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '../../components/Navigation'

type Props = NativeStackScreenProps<StackParamList, 'Gallery'>

const GalleryScreen: React.FC<Props> = ({ navigation, route }) => {
	const { title, photos, date } = route.params

	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Title title={title} date={date} />,
			headerLeft: () => (
				<Pressable onPress={() => navigation.goBack()}>
					<BackIcon />
				</Pressable>
			)
		})
	}, [])

	return (
		<Container>
			<FlatList
				data={photos}
				keyExtractor={item => item['id']}
				renderItem={({ item }) => (
					<Pressable
						onPress={() =>
							navigation.navigate('Photo', { src: item['img_src'], id: item['id'] })
						}
					>
						<Image source={{ uri: item['img_src'] }} />
					</Pressable>
				)}
				horizontal={false}
				numColumns={3}
				columnWrapperStyle={{ gap: 8, marginBottom: 8 }}
			/>
		</Container>
	)
}
export default GalleryScreen
