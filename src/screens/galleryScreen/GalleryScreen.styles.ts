import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
	justify-content: space-between;
	flex: 1;
	padding: 16px 16px 0 16px;
	gap: 8px;
`

export const Image = styled.Image`
	width: ${() => (windowWidth - 32) / 3 - 16 / 3 + 'px'};
	height: ${() => (windowWidth - 32) / 3 - 16 / 3 + 'px'};
	border-radius: 10px;
`
