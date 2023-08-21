import React, { FC } from 'react'
import styled from 'styled-components/native'
import { StyleProp, ViewStyle } from 'react-native'

interface Props {
	width: string
	height: string
	children: React.ReactNode
	style?: StyleProp<ViewStyle>
	onPress: () => void
}

const ButtonText = styled.Text`
	color: white;
	font-size: 18px;
	font-family: 'dosis-sb';
`

const MyButton: FC<Props> = ({ width, height, children, style, onPress }) => {
	const ButtonBackground = styled.Pressable<Props>`
		background-color: #bf2e0e;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		width: ${() => width};
		height: ${() => height};
	`

	return (
		<ButtonBackground style={style} onPress={onPress}>
			<ButtonText>{children}</ButtonText>
		</ButtonBackground>
	)
}

export default MyButton
