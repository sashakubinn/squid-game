import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from './InputField'
import { db } from '../../../../firebase'

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = async data => {
		try {
			await addDoc(collection(db, 'series'), {
				timestamp: serverTimestamp(),
				thumbnailPath: data.thumbnailPath,
				videoUrl: data.videoUrl,
			})
		} catch (error) {
			console.error(error)
		}
		reset()
	}

	return (
		<div
			className='py-10 px-20'
			style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '45%' }}
		>
			<h2 className='mb-8 text-white font-bold text-2xl text-center'>
				Add new series
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField register={register} errors={errors} />
				<input
					type='submit'
					value='Add'
					className='block border-none py-2 px-4 outline-none mx-auto mt-10 cursor-pointer bg-pink-800'
					style={{ minWidth: 140 }}
				/>
			</form>
		</div>
	)
}

export default Form
