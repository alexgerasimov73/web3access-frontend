import { useEffect, useRef } from 'react'

export const useCursorAnimation = () => {
	const cursorRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let curX = 0
		let curY = 0
		let tgX = 0
		let tgY = 0
		let animationFrame: number
		const controller = new AbortController()
		const { signal } = controller

		const move = () => {
			if (signal.aborted) return

			if (cursorRef.current) {
				curX += (tgX - curX) / 20
				curY += (tgY - curY) / 20
				cursorRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
			}

			animationFrame = requestAnimationFrame(move)
		}

		const handleMouseMove = (event: MouseEvent) => {
			if (signal.aborted) return

			tgX = event.clientX
			tgY = event.clientY
		}

		window.addEventListener('mousemove', handleMouseMove, { signal })
		animationFrame = requestAnimationFrame(move)

		return () => {
			controller.abort()
			cancelAnimationFrame(animationFrame)
		}
	}, [])

	return cursorRef
}
