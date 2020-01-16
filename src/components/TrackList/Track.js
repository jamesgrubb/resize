import React from 'react'

export default ({ children, handleClick }) => {
	return (
		<div onClick={handleClick} className='track'>
			{children}
		</div>
	)
}
