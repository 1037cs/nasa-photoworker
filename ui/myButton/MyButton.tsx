import React, { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ButtonPressable, ButtonText } from './MyButton.styles'

interface Props {
	width: string
	height: string
	children: React.ReactNode
	style?: StyleProp<ViewStyle>
	onPress: () => void
}

const MyButton: FC<Props> = ({ width, height, children, style, onPress }) => {
	return (
		<ButtonPressable
			width={width}
			height={height}
			style={style}
			onPress={onPress}
		>
			<ButtonText>{children}</ButtonText>
		</ButtonPressable>
	)
}

export default MyButton
