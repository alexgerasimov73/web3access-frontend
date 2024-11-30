import { useCursorAnimation } from '../hooks/useCursorAnimation'

export const GradientBackground = () => {
	const cursorRef = useCursorAnimation()

	return (
		<div className='GradientBackground'>
			<div className='GradientBackground-container'>
				<div className='shape c1'></div>
				<div className='shape c2'></div>
				<div className='shape c3'></div>
				<div className='shape c4'></div>
				<div className='shape c5'></div>
				<div className='cursor' ref={cursorRef}></div>
			</div>
		</div>
	)
}
