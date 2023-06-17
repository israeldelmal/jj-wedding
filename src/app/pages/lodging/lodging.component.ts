import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HotelId, Hotels } from '@core/lodging.interfaces'
import { MapDialogComponent } from './components/map-dialog.component/map-dialog.component'

@Component({
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent {
	private readonly dialog = inject(MatDialog)

	readonly hotels: Hotels = [
		{
			hotelId: HotelId.HotelRealDeMinasTradicional,
			name: 'Hotel Real de Minas Tradicional',
			reservationCode: 'BODA JORGE & JENNIFER',
			image: 'assets/images/hotels/hotel-real-de-minas-tradicional-hotel.webp',
			tel: 'tel:+524422160444',
			email: 'mailto:reserve@realdeminas.com.mx',
			website: 'https://www.realdeminas.com.mx',
			delay: '',
		},
		{
			hotelId: HotelId.HotelCriol,
			name: 'Hotel Criol',
			reservationCode: 'BODA JORGE & JENNIFER',
			image: 'assets/images/hotels/hotel-criol.webp',
			tel: 'tel:+524422137782',
			email: 'mailto:contacto@hotelescalle1.com',
			website: 'https://www.hotelcriol.com',
			delay: 'animate__delay-1s',
		},
		{
			hotelId: HotelId.HotssonHotel,
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

	onOpenDialog(hotelId: HotelId): void {
		const data = hotelId

		this.dialog.open(MapDialogComponent, {
			width: '100%',
			maxWidth: 'calc(100vw - 2rem)',
			autoFocus: false,
			data,
		})
	}
}
