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

export interface Schedule {
	label: string
	time: string
	delay: string
	maps?: {
		google: string
		waze: string
	}
}

export type ScheduleList = Schedule[]
