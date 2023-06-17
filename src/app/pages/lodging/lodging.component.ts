import { Component } from '@angular/core'
import { HotelId, Hotels } from '@core/lodging.interfaces'

@Component({
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent {
	readonly hotels: Hotels = [
		{
			hotelid: HotelId.HotelRealDeMinasTradicional,
			name: 'Hotel Real de Minas Tradicional',
			reservationCode: 'BODA JORGE & JENNIFER',
			image: 'assets/images/hotels/hotel-real-de-minas-tradicional-hotel.webp',
			tel: 'tel:+524422160444',
			email: 'mailto:reserve@realdeminas.com.mx',
			website: 'https://www.realdeminas.com.mx',
			delay: '',
		},
		{
			hotelid: HotelId.HotelCriol,
			name: 'Hotel Criol',
			reservationCode: 'BODA JORGE & JENNIFER',
			image: 'assets/images/hotels/hotel-criol.webp',
			tel: 'tel:+524422137782',
			email: 'mailto:contacto@hotelescalle1.com',
			website: 'https://www.hotelcriol.com',
			delay: 'animate__delay-1s',
		},
		{
			hotelid: HotelId.HotssonHotel,
			name: 'Hotsson Hotel',
			reservationCode: 'BODA JORGE & JENNIFER',
			image: 'assets/images/hotels/hotsson-hotel.webp',
			tel: 'tel:+524424049900',
			email: 'mailto:contacto.qro@hotsson.com',
			website: 'https://www.hotsson.com/hoteles/queretaro-centro',
			delay: 'animate__delay-2s',
		},
	]
	readonly ripple = 'rgb(0 0 0 / 8%)'
}
