import React, { useContext } from 'react'
import Track from './Track.js'
import useMusicPlayer from '../../useMusicPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './tracklist.scss'

const TrackList = () => {
	const {
		trackList,
		loader,
		playTrack,
		currentTrackName,
		isPlaying
	} = useMusicPlayer()
	console.log(currentTrackName)
	return (
		<div className='tracklist' style={{ '--loader': loader }}>
			{trackList.map((track, index) => (
				<Track handleClick={() => playTrack(index)}>
					<button className='button'>
						{currentTrackName === track.name && isPlaying ? (
							<FontAwesomeIcon icon='pause' className='track__button' />
						) : (
							<FontAwesomeIcon icon='play' className='track__button' />
						)}
					</button>
					<div className='track-name'>{track.name}</div>
				</Track>
			))}
		</div>
	)
}

export default TrackList
