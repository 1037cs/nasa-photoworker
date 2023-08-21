import axios from 'axios/index'
import { API_KEY } from '../../config'

export const fetchPhotos = async (date: string, camera: string) => {
	let res = await axios.get(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${API_KEY}`
	)
	return res.data.photos
}
