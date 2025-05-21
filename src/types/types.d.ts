declare global {
	interface Window {
		showDirectoryPicker: (
			options?: DirectoryPickerOptions
		) => Promise<FileSystemDirectoryHandle>

		showOpenFilePicker: (
			options?: FilePickerOptions
		) => Promise<FileSystemFileHandle[]>

		showSaveFilePicker: (
			options?: FilePickerOptions
		) => Promise<FileSystemFileHandle>
	}

	/* pannellum specific types */
	interface Window {
		showDirectoryPicker: (
			options?: DirectoryPickerOptions
		) => Promise<FileSystemDirectoryHandle>
	
		showOpenFilePicker: (
			options?: FilePickerOptions
		) => Promise<FileSystemFileHandle[]>
	
		showSaveFilePicker: (
			options?: FilePickerOptions
		) => Promise<FileSystemFileHandle>
		
		// Pannellum specific types
		pannellum: Pannellum
		
		// Add this new function for photo cache access
		getPhotoCacheFn?: () => CacheLine[]
	}

	interface Pannellum {
		viewer: (container: string, config: State) => PannellumViewer
	}

	type viewerEvent = 'error' | 'load' | 'scenechange' | 'animatefinished'

	interface PannellumViewer {
		on: (event: viewerEvent, listener: (data: unknown) => void) => void
		destroy: () => void
		getYaw: () => number
		getPitch: () => number
		setYaw: (yaw: number) => void
		setPitch: (pitch: number) => void
		loadScene: (
			id: string,
			pitch?: number,
			yaw?: number,
			hfov?: number
		) => void
	}

	module '*.svg' {
		const content: string
		export default content
	}
}

export {}
