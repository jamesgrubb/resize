import React, { useState } from 'react'

const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		tracks: [{ name: 'Go for Landing' }, { name: 'JG_2018_BD' }],
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
