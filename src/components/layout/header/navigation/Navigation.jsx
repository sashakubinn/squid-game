import React from 'react'
import { Link } from 'react-router-dom'
import { list } from './list'
import netflixLogoImage from '../../../../assets/images/netflix-logo.png'

const Navigation = () => {
	return (
		<ul className='list-none flex items-center'>
			{list.map((title, idx) => (
				<li className='inline-block px-10' key={idx}>
					{idx !== 2 ? (
						<Link
							to={`/${title.toLowerCase()}`}
							className='block text-white opacity-80  hover:opacity-100 transition-opacity duration-300 ease-in-out text-[1.4rem]'
						>
							{title}
						</Link>
					) : (
						<img
							alt=''
							src={netflixLogoImage}
							width={40}
							draggable={false}
							className='block mx-5'
						/>
					)}
				</li>
			))}
		</ul>
	)
}

export default Navigation
