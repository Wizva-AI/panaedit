import React from 'react'
import HotspotList from './HotspotList'
import HotspotAddInfo from './HotspotAddInfo'
import HotspotAddArticle from './HotspotAddArticle'
import HotspotAddLink from './HotspotAddLink'
import HotspotAddWebLink from './HotspotAddWebLink' // Renamed from HotspotAddPhoto
import HotspotAddPhotoWithTooltip from './HotspotAddPhotoWithTooltip'
import { useEditor } from '../hooks/useEditor'

/* container of hotspots */
const HotspotContainer = () => {
	const { scene, activeSceneKey } = useEditor()

	const { hotSpots } = scene || []

	return (
		<>
			<h2>Hotspots</h2>
			<div className="flex flex-row pb-2 flex-wrap gap-1">
				<HotspotAddInfo />
				<HotspotAddArticle />
				<HotspotAddLink />
				<HotspotAddWebLink />
				<HotspotAddPhotoWithTooltip />
			</div>
			{hotSpots && (
				<HotspotList hotspots={hotSpots} sceneKey={activeSceneKey} />
			)}
		</>
	)
}

export default HotspotContainer