import React from 'react'

const InputField = ({ register, errors }) => {
	return (
		<div>
			<input
				placeholder='Enter thumbnail path'
				className='w-full py-2 px-4 outline-none block mb-2 text-white'
				style={{
					backgroundColor: 'rgba(255,255,255,0.3)',
				}}
				{...register('thumbnailPath', {
					required: true,
				})}
			/>
			{errors.thumbnailPath && (
				<span className='text-red-700'>Plz fill thumbnail path field</span>
			)}
			<input
				placeholder='Enter video url'
				className='w-full py-2 px-4 outline-none block mt-4 mb-2 text-white'
				style={{
					backgroundColor: 'rgba(255,255,255,0.3)',
				}}
				{...register('videoUrl', {
					required: true,
				})}
			/>
			{errors.videoUrl && (
				<span className='text-red-700'> Plz fill video url field </span>
			)}
		</div>
	)
}

export default InputField
