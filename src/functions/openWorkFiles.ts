export const openWorkFiles = async (directories: string[]) => {
	/* user selects the root folder */
	const project = await window.showDirectoryPicker({
		startIn: 'desktop'
	})

	const files: CacheLine[] = []

	if (!project) return files

	for (const dir of directories) {
		try {
			const handle = await project.getDirectoryHandle(dir, {
				create: false
			})
			/* for every file, we create a filename, url pair */
			for await (const entry of handle.values()) {
				if (entry.kind === 'file') {
					const f = await entry.getFile()
					const blob = URL.createObjectURL(f)

					files.push({ key: `${dir}/${entry.name}`, value: blob })
				}
			}
		} catch (e) {
			if (e.name === 'NotFoundError') {
				throw new Error(`The selected directory is missing the required subdirectory: '${dir}'`);
			}
			throw e; // re-throw other errors
		}
	}

	console.log(files);
	return files
}
