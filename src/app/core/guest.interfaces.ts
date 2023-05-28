export interface Guest {
	guestId: string
	title: string
	message: string
	passes: string
	ourDreams: {
		message: string
		sub: string
	}
}

export interface GuestList {
	[key: string]: Guest
}
