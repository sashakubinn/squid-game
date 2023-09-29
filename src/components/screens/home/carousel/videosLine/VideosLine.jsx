import React from 'react'
import { useModal } from '../../../../ModalProvider'
import VideoItem from './VideoItem'

const VideosLine = ({ slides, currentIndex, setCurrentIndex }) => {
	const { setVideoUrl } = useModal()

	const playHandler = (index, videoUrl) => {
		setCurrentIndex(index)
		setVideoUrl(videoUrl)
	}

	const count = currentIndex * 192

	return (
		<div
			className='flex items-end h-32 transition-all duration-300 ease-linear'
			style={{
				transform: currentIndex ? `translateX(-${count}px)` : '',
			}}
		>
			{slides.map((slide, index) => {
				const isActive = currentIndex === index

				return (
					<VideoItem
						slide={slide}
						key={slide._id}
						clickHandler={() => playHandler(index, slide.videoUrl)}
						isActive={isActive}
					/>
				)
			})}
		</div>
	)
}

export default VideosLine
