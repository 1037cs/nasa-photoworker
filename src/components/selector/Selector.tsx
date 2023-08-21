import React, { FC } from 'react'
import { Input, InputWrapper, Title } from './Selector.styles'
import { Pressable, Text } from 'react-native'

interface ISelector {
	title: string
	value: string
	children: React.ReactNode
	onPress: () => void
}

const Selector: FC<ISelector> = ({ title, value, children, onPress }) => {
	return (
		<InputWrapper>
			<Title>{title}</Title>
			<Input>
				<Text style={{ fontFamily: 'terminal-dosis' }}>{value}</Text>
				<Pressable onPress={onPress}>{children}</Pressable>
			</Input>
		</InputWrapper>
	)
}

export default Selector
