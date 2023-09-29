import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className='relative'>
			<button onClick={() => setIsShow(!isShow)}>
				<HiOutlineMenuAlt3 size={40} color='white' className='opacity-90' />
			</button>

			{isShow && (
				<ul
					className='absolute rounded-xl bg-purple-500/80
				 shadow-lg p-4 w-32 right-0 keyframe'
				>
					{Array(5)
						.fill('')
						.map((_, idx) => (
							<li key={idx}>
								<Link
									to='/'
									className='block py-1 hover:text-white duration-300 ease-in-out transition-colors'
								>{`Page ${idx}`}</Link>
							</li>
						))}
				</ul>
			)}
		</div>
	)
}

export default Hamburger
