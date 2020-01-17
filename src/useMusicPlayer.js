import { useContext } from 'react'
import { MusicPlayerContext } from './MusicPayerContext'

const useMusicPlayer = () => {
	const [state, setState] = useContext(MusicPlayerContext)

	// Play a specific track
	function playTrack(index) {
		if (index === state.currentTrackIndex) {
			togglePlay()
		} else {
			state.audioPlayer.pause()
			state.audioPlayer = new Audio(state.tracks[index].file)
			state.audioPlayer.play()
			setState((state) => ({
				...state,
				currentTrackIndex: index,
				isPlaying: true
			}))
		}
	}

	// Toggle play or pause
	function togglePlay() {
		if (state.isPlaying) {
			state.audioPlayer.pause()
		} else {
			state.audioPlayer.play()
		}
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
