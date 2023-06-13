import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { ScheduleList } from '@core/guest.interfaces'
import { MapsDialogComponent } from './components/maps-dialog/maps-dialog.component'
import { ParkingMapsDialogComponent } from './components/parking-maps-dialog/parking-maps-dialog.component'

@Component({
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
	private readonly dialog = inject(MatDialog)

	readonly scheduleList: ScheduleList = [
		{
			label: 'SCHEDULE.RELIGIOUS_CEREMONY',
			time: '4:00 PM',
			delay: '',
			maps: {
				hasParkings: true,
				isChurch: true,
				buildingName: 'Parroquia del Sagrado Corazón de Jesús "Templo de Santa Clara"',
				image: 'assets/images/church.webp',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '7:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				hasParkings: false,
				isChurch: false,
				buildingName: 'Salón del Lago, Hacienda San Antonio del Battán',
				image: 'assets/images/salon.webp',
			},
		},
		{
			label: 'SCHEDULE.COCKTAIL',
			time: '7:30 PM',
			delay: 'animate__delay-2s',
		},
		{
			label: 'SCHEDULE.BRIDE_AND_GROOM_ENTRANCE',
			time: '8:00 PM',
			delay: 'animate__delay-3s',
		},
		{
			label: 'SCHEDULE.FEAST',
			time: '8:30 PM',
			delay: 'animate__delay-4s',
		},
		{
			label: 'SCHEDULE.PARTY_STARTS',
			time: '9:30 PM - 3:00 AM',
			delay: 'animate__delay-5s',
		},
	]

	onOpenDialogMap(isChurch: boolean, isGoogle: boolean): void {
		const data = { isChurch, isGoogle }

		this.dialog.open(MapsDialogComponent, {
			autoFocus: false,
			data,
			maxWidth: 'calc(100vw - 2rem)',
		})
	}

	onOpenParkingMapsDialog(data: boolean): void {
		this.dialog.open(ParkingMapsDialogComponent, {
			autoFocus: false,
			maxWidth: 'calc(100vw - 2rem)',
			data,
		})
	}
}
