import styled from 'styled-components/native'

export const ButtonText = styled.Text`
	color: white;
	font-size: 18px;
	font-family: 'dosis-sb';
`

interface Props {
	width: string
	height: string
}

export const ButtonPressable = styled.Pressable<Props>`
	background-color: #bf2e0e;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	width: ${props => props.width};
	height: ${props => props.height};
	shadow-opacity: 0.2;
	shadow-radius: 10px;
	shadow-color: #bf2e0e;
	shadow-offset: 0px 4px;
`
