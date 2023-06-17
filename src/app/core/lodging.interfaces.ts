export const enum HotelId {
	HotelRealDeMinasTradicional = 1,
	HotelCriol = 2,
	HotssonHotel = 3,
}

export interface Hotel {
	hotelid: HotelId
	name: string
	reservationCode: string
	image: string
	tel: string
	email: string
	website: string
	delay: string
}

export type Hotels = Hotel[]
