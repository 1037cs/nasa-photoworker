import React from 'react'
import { Text, View } from 'react-native'

interface IPhotoScreenTitle {
	id: string
}

export const PhotoScreenTitle = ({ id }: IPhotoScreenTitle) => {
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
