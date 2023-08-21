import React, { FC } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import styled from 'styled-components/native'

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
	return (
		<DateTimePickerWrapper>
			<DateTimePicker
				maximumDate={new Date()}
				minimumDate={new Date(2003, 5, 10)}
				value={date}
				mode='date'
				display='spinner'
				onChange={(e, date: Date) => setDate(date)}
			/>
		</DateTimePickerWrapper>
	)
}

export default MyDatePicker
