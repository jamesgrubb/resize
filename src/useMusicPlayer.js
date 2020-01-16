import { useContext, useRef, useEffect } from 'react'
// import { Buffers, Players } from 'tone'
import { MusicPlayerContext } from './MusicPayerContext'

const useMusicPlayer = () => {
	const [state, setState] = useContext(MusicPlayerContext)

	const players = useRef()

	// Play a specific track
	function playTrack(index) {
		if (index === state.currentTrackIndex) {
			togglePlay()
		} else {
			setState((state) => ({
				...state,
				currentTrackIndex: index,
				isPlaying: true
			}))
		}
	}

	// Toggle play or pause
	function togglePlay() {
		setState((state) => ({ ...state, isPlaying: !state.isPlaying }))
	}
	return {
		togglePlay,
		currentTrackName:
			state.currentTrackIndex !== null &&
			state.tracks[state.currentTrackIndex].name,
		trackList: state.tracks,
		loader: state.loader,
		playTrack,
		isPlaying: state.isPlaying
	}
}

export default useMusicPlayer
