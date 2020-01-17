import React, { useState, useRef } from 'react'
// import { Player } from 'tone'
const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = (props) => {
	// const player = useRef(new Player())

	const [state, setState] = useState({
		audioPlayer: new Audio(),
		// audioPlayer: player.current,
		tracks: [
			{
				name: 'Go for Landing',
				file:
					'https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3'
			},
			{
				name: 'JG_2018_BD',
				file:
					'https://res.cloudinary.com/makingthings/video/upload/v1576483365/mp3/jg_bd_2018.mp3'
			}
		],
		currentTrackIndex: null,
		isPlaying: false,
		isLoaded: false,
		loader: 0
	})
	return (
		<MusicPlayerContext.Provider value={[state, setState]}>
			{props.children}
		</MusicPlayerContext.Provider>
	)
}

export { MusicPlayerContext, MusicPlayerProvider }
