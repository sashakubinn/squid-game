import React from 'react'
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'
import { Link } from 'react-router-dom'

const stylesIcon =
	'text-white hover:opacity:100 opacity-80 duration-300 ease-in-out transition-opacity my-8'

const socialMedia = [
	{
		icon: <SiInstagram size='21' className={stylesIcon} />,
		link: '/inst',
	},
	{
		icon: <SiFacebook size='21' className={stylesIcon} />,
		link: '/fb',
	},
	{
		icon: <SiTwitter size='21' className={stylesIcon} />,
		link: '/tw',
	},
]

const SocialMedia = () => {
	return (
		<div
			className='absolute right-1 z-10'
			style={{
				top: '50%',
			}}
		>
			{socialMedia.map(({ icon, link }) => (
				<a href={link} key={link} target='_blank' rel='noreferrer'>
					{icon}
				</a>
			))}
		</div>
	)
}

export default SocialMedia
