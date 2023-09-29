import React from 'react'
import Header from './header/Header'

import BgImage from '../../assets/images/bg-image.jpg'
import SocialMedia from './SocialMedia'
import Modal from '../screens/home/Modal'

const Layout = ({ children }) => {
	return (
		<div
			className='p-12 relative bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(${BgImage})`,
			}}
		>
			<div className='gradient' />
			<div className='relative z-1'>
				<Header />
				<SocialMedia />
				<Modal />
				{children}
			</div>
		</div>
	)
}

export default Layout
