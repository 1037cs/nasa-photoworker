import moment from 'moment/moment'

export const formatDate = (date: Date): string =>
	moment(date).format('D MMM, YYYY')

export const formatDateToAxios = (date: Date): string =>
	moment(date).format('YYYY-M-D')
