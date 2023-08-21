import axios from 'axios/index'

export const fetchPhotos = async (date: string, camera: string) => {
	let res = await axios.get(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=eebdjPCjjUS83I5tiyg9jndbvdWUkplv0YhazksI`
	)
	return res.data.photos
}
