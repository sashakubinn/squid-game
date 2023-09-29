import React, { useState } from 'react'
import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'
import thumb1 from '../../../../assets/thumbnails/thumb1.jpg'
import thumb2 from '../../../../assets/thumbnails/thumb2.jpg'
import thumb3 from '../../../../assets/thumbnails/thumb3.jpg'
import thumb4 from '../../../../assets/thumbnails/thumb4.jpg'
import thumb5 from '../../../../assets/thumbnails/thumb5.jpg'

const initialSlides = [
	{
		_id: 'wef2we',
		thumbnailPath: thumb1,
		videoUrl: 'https://www.youtube.com/watch?v=vd57lL4a8Iw',
	},
	{
		_id: '123fqw',
		thumbnailPath: thumb2,
		videoUrl: 'https://www.youtube.com/watch?v=vd57lL4a8Iw',
	},
	{
		_id: 'fg4wqr',
		thumbnailPath: thumb3,
		videoUrl: 'https://www.youtube.com/watch?v=vd57lL4a8Iw',
	},
	{
		_id: 'lkoi99',
		thumbnailPath: thumb4,
		videoUrl: 'https://www.youtube.com/watch?v=vd57lL4a8Iw',
	},
	{
		_id: '95tyre',
		thumbnailPath: thumb5,
		videoUrl: 'https://www.youtube.com/watch?v=vd57lL4a8Iw',
	},
]

const Carousel = () => {
	const [slides] = useState(initialSlides)
	const [currentIndex, setCurrentIndex] = useState(0)
	return (
		<div className='mt-24'>
			<div className='flex items-center mb-5'>
				<div className='text-white opacity-90 text-lg font-medium mr-20'>
					1 series
				</div>
				<Controls
					slidesLength={slides.length}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
			<VideosLine
				slides={slides}
				setCurrentIndex={setCurrentIndex}
				currentIndex={currentIndex}
			/>
		</div>
	)
}

export default Carousel
