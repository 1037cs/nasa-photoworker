import React, { FC } from 'react'
import { Picker } from '@react-native-picker/picker'

export const cameras: { label: string; value: string }[] = [
	{ label: 'Front Hazard Avoidance Camera', value: 'fhaz' },
	{ label: 'Rear Hazard Avoidance Camera', value: 'rhaz' },
	{ label: 'Mast Camera', value: 'mast' },
	{ label: 'Chemistry and Camera Complex', value: 'chemcam' },
	{ label: 'Mars Hand Lens Imager', value: 'mahli' },
	{ label: 'Mars Descent Imager', value: 'mardi' },
	{ label: 'Navigation Camera', value: 'navcam' },
	{ label: 'Panoramic Camera', value: 'pancam' },
	{
		label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
		value: 'minites'
	}
]

interface IMyCameraPicker {
	camera: string
	setCamera: (a: string) => void
}

const MyCameraPicker: FC<IMyCameraPicker> = ({ camera, setCamera }) => {
	return (
		<Picker
			style={{ width: '100%', position: 'absolute', bottom: 0 }}
			selectedValue={camera}
			onValueChange={itemValue => setCamera(itemValue)}
		>
			{cameras.map((item, i) => (
				<Picker.Item key={i} label={item.label} value={item.value} />
			))}
		</Picker>
	)
}

export default MyCameraPicker
