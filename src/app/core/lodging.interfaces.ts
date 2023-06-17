export enum HotelId {
	HotelRealDeMinasTradicional = 1,
	HotelCriol = 2,
	HotssonHotel = 3,
}

export const enum HotelName {
	HotelRealDeMinasTradicional = 'Hotel Real de Minas Tradicional',
	HotelCriol = 'Hotel Criol',
	HotssonHotel = 'Hotsson Hotel',
}

export interface Hotel {
	hotelId: HotelId
	name: string
	reservationCode: string
	image: string
	tel: string
	email: string
	website: string
	delay: string
}

export type Hotels = Hotel[]
