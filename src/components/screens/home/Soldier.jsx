import soldierImg from '../../../assets/images/squid-character.png'

const Soldier = () => {
	return (
		<div>
			<div className='absolute -bottom-12 right-6'>
				<img alt='' draggable={false} src={soldierImg} width={600} />
			</div>
			<div className='absolute -bottom-[2.9rem] right-4 opacity-20'>
				<img alt='' draggable={false} src={soldierImg} width={600} />
			</div>
		</div>
	)
}

export default Soldier
