import squidLogo from '../../../assets/images/squid-game-.png'
const Content = () => {
	return (
		<div className='mt-28 w-1/2'>
			<img
				alt=''
				src={squidLogo}
				className='game-logo mb-10 -ml-28'
				draggable={false}
			/>
			<div className=' ml-5'>
				<p
					className='text-white opacity-70 leading-8 text-lg '
					style={{ maxWidth: '40%' }}
				>
					Once you start the game, there is no turning back. The winner is
					alone, the loser only faces death.
				</p>
			</div>
		</div>
	)
}

export default Content
