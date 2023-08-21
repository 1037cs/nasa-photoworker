import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	margin-top: ${props => `-${props.height}px`};
`

export const BgImage = styled.Image`
	width: 100%;
	max-height: 326px;

	position: absolute;
	bottom: 0;
	object-fit: fill;

	z-index: -1;

	opacity: ${props => (props?.variant == false ? 1 : 0)};
`
