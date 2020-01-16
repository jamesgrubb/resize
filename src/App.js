import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { MusicPlayerProvider } from './MusicPayerContext'
import TrackList from './components/TrackList/TrackList'
import './App.scss'
library.add(faPlay, faPause)
function App() {
	return (
		<MusicPlayerProvider>
			<div className='App'>
				<header className='App-header'>
					<h1>Gibson</h1>
				</header>
				<TrackList />
			</div>
		</MusicPlayerProvider>
	)
}

export default App
