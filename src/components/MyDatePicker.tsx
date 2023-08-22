import React, { FC } from 'react'
import DateTimePicker, {
	DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import styled from 'styled-components/native'
import { Alert } from 'react-native'

const DateTimePickerWrapper = styled.View`
	position: absolute;
	bottom: 0;
	margin: 0 auto;
`

interface IMyDatePicker {
	date: Date
	setDate: (date: Date) => void
}

const MyDatePicker: FC<IMyDatePicker> = ({ date, setDate }) => {
	function onChange(e: DateTimePickerEvent, date: Date | undefined) {
		try {
			if (e.type == 'set') {
				if (date) {
					setDate(date)
				} else {
					throw new TypeError('Date is undefined')
				}
			}
		} catch (e) {
			if (e instanceof TypeError) {
				Alert.alert('Error', 'Date is undefined')
			}
		}
	}

	return (
		<DateTimePickerWrapper>
			<DateTimePicker
				maximumDate={new Date()}
				minimumDate={new Date(2003, 5, 10)}
				value={date}
				mode='date'
				display='spinner'
				onChange={onChange}
			/>
		</DateTimePickerWrapper>
	)
}

export default MyDatePicker
