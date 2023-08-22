import React from 'react'
import { Text, View } from 'react-native'

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

export default Title
