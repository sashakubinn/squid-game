import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/pngwing.com(1).png'

const Logo = () => {
	return (
		<Link>
			<img src={logo} alt='' width={65} />
		</Link>
	)
}

export default Logo
