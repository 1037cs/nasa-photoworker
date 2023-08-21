import React, { FC, useState } from 'react'
import CalendarLogo from '../../../assets/icons/calendar.svg'
import DropDown from '../../../assets/icons/dropdown.svg'
import MyButton from '../../../ui/myButton/MyButton'
import { BgImage, Container } from './SelectionScreen.styles'
import Selector from '../../components/selector/Selector'
import MyDatePicker from '../../components/MyDatePicker'
import MyCameraPicker, { cameras } from '../../components/MyCameraPicker'
import { fetchPhotos } from '../../http/fetchPhotos'
import { useHeaderHeight } from '@react-navigation/elements'
import { ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatDate, formatDateToAxios } from '../../utils/helpers'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../components/Navigation'

const SelectionScreen: FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

	const headerHeight = useHeaderHeight()
	const [isLoading, setIsLoading] = useState(false)

	const [date, setDate] = useState<Date>(new Date())
	const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)

	const [camera, setCamera] = useState<string>('fhaz')
	const [openCameraPicker, setOpenCameraPicker] = useState<boolean>(false)

	const toggleOpen = (type: 'date' | 'camera') => {
		if (type === 'date') {
			setOpenCameraPicker(false)
			setOpenDatePicker(!openDatePicker)
		} else {
			setOpenDatePicker(false)
			setOpenCameraPicker(!openCameraPicker)
		}
	}

	function getPhotos() {
		setIsLoading(true)
		fetchPhotos(formatDateToAxios(date), camera)
			.then(data => {
				if (data.length === 0) throw new TypeError()
				navigation.navigate('Gallery', {
					title: cameras.find(item => item?.value === camera).label,
					photos: data,
					date: formatDate(date)
				})
			})
			.catch(e => {
				if (e instanceof TypeError) {
					Alert.alert('No photos on this day', 'Please, select an another date')
				} else Alert.alert('Error', e.message)
			})
			.finally(() => setIsLoading(false))
	}

	if (isLoading)
		return (
			<Container>
				<ActivityIndicator />
			</Container>
		)

	return (
		<Container height={headerHeight}>
			<Selector
				title='Rover Camera'
				value={cameras.find(item => item.value === camera)?.label || camera}
				onPress={() => toggleOpen('camera')}
			>
				<DropDown width={24} height={24} />
			</Selector>

			<Selector
				title='Date'
				value={formatDate(date)}
				onPress={() => toggleOpen('date')}
			>
				<CalendarLogo width={24} height={24} />
			</Selector>

			<MyButton
				width='327px'
				height='60px'
				style={{ marginTop: 16 }}
				onPress={getPhotos}
			>
				Explore
			</MyButton>

			<BgImage
				variant={openDatePicker || openCameraPicker}
				source={require('../../../assets/icons/bg-image.png')}
				resizeMode='contain'
			/>

			{openDatePicker && <MyDatePicker date={date} setDate={setDate} />}

			{openCameraPicker && (
				<MyCameraPicker camera={camera} setCamera={setCamera} />
			)}
		</Container>
	)
}

export default SelectionScreen
