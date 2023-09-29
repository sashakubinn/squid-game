import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Controls = ({ slidesLength, setCurrentIndex, currentIndex }) => {
	const isPrevDisabled = currentIndex === 0
	const isNextDisabled = currentIndex + 1 === slidesLength

	const prevHandler = () => {
		!isPrevDisabled && setCurrentIndex(prev => prev - 1)
	}

	const nextHandler = () => {
		!isNextDisabled && setCurrentIndex(prev => prev + 1)
	}

	return (
		<div className='text-white'>
			<button
				className={`${'stylesButton'} ${
					isPrevDisabled ? 'disabledButton' : 'activeButton'
				} `}
				onClick={() => prevHandler()}
			>
				<HiChevronLeft size={26} />
			</button>
			<button
				className={`${'stylesButton'} ${
					isNextDisabled ? 'disabledButton' : 'activeButton'
				} `}
				onClick={() => nextHandler()}
			>
				<HiChevronRight size={26} />
			</button>
		</div>
	)
}

export default Controls
