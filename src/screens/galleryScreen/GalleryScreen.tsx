import React, { useEffect } from 'react'
import { Container } from './GalleryScreen.styles'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import BackIcon from '../../../assets/icons/back-black.svg'

interface ITitle {
	title: string
	date: string
}

const Title = ({ title, date }: ITitle) => {
	return (
		<View>
			<Text
				style={{
					textAlign: 'center',
					fontFamily: 'dosis-sb',
					fontSize: 18,
					lineHeight: 22
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					textAlign: 'center',
					fontFamily: 'terminal-dosis',
					fontSize: 13,
					lineHeight: 22
				}}
			>
				{date}
			</Text>
		</View>
	)
}

const GalleryScreen = ({ route, navigation }) => {
	const { title, photos, date } = route.params

	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Title title={title} date={date} />,
			headerLeft: () => (
				<Pressable onPress={() => navigation.goBack(null)}>
					<BackIcon width={24} heigth={24} />
				</Pressable>
			)
		})
	}, [])

	return (
		<Container>
			<FlatList
				data={photos}
				renderItem={({ item }) => (
					<Pressable
						onPress={() =>
							navigation.navigate('Photo', { src: item.img_src, id: item.id })
						}
					>
						<Image
							source={{ uri: item.img_src }}
							width={109}
							height={109}
							style={{ borderRadius: 10 }}
						/>
					</Pressable>
				)}
				horizontal={false}
				numColumns={3}
				columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 8 }}
			/>
		</Container>
	)
}
export default GalleryScreen
