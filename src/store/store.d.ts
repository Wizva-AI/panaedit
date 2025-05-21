export {}
declare global {
	declare interface State {
		default: Default
		scenes: { [key: string]: Scene }
		articles: Article[]
		editor: Editor
		cache: CacheLine[]
		floorPlan: FloorPlan
	}

	declare interface Default {
		firstScene: string
		sceneFadeDuration: number
		type: 'equirectangular'
		autoLoad: boolean
		compass: boolean
		hotSpotDebug: boolean
		hfov: number
		vfov: number
		minPitch: number
		maxPitch: number
		basePath: string
		friction: number
	}

	declare interface Editor {
		activeView: string
		activeSceneKey: string
		yaw: number
		pitch: number
		triggerRefresh: number
		previewReady: boolean
	}

	declare interface CacheLine {
		key: string
		value: string
	}

	declare interface Scene {
		title: string
		northOffset: number
		panorama: string
		hotSpots: Hotspot[]
	}

	declare interface Hotspot {
		pitch: number
		yaw: number
		type: 'scene' | 'info' | 'photo' | 'article'
		text: string
		targetYaw: 'sameAzimuth'
		sceneId?: string,
		URL?: string,
		cssClass?: string,
		createTooltipFuncStr?: string,
		createTooltipArgs?: object,
		clickHandlerFuncStr?: string,
		clickHandlerArgs?: object
	}

	declare interface Article {
		title: string
		url: string
		photos: Photo[]
	}

	declare interface Photo {
		url: string
		label: string
	}
	
	declare interface FloorPlan {
		imagePath: string
		markers: FloorPlanMarker[]
	}
	
	declare interface FloorPlanMarker {
		id: string
		x: number
		y: number
		sceneKey: string
		label: string
	}
}