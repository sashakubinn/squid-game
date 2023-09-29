import React from 'react'
import { IoMdPlay } from 'react-icons/io'
const PlayButton = () => {
	return (
		<div
			className='absolute top-0 left-0 keyframe w-full h-full flex items-center justify-center z-1'
			style={{
				backgroundColor: 'rgba(255, 40, 126, .15)',
			}}
		>
			<div
				className='circle-effect absolute top-10 z-1 opacity-30'
				style={{ left: '4.8rem' }}
			/>
			<div
				className='circle-effect absolute top-12 z-2 opacity-30'
				style={{ right: '4.8rem' }}
			/>
			<div className='circle-effect z-3'>
				<IoMdPlay size={20} color='white' />
			</div>
		</div>
	)
}

export default PlayButton
