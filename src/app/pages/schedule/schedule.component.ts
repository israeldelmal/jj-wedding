import { Component } from '@angular/core'

import { ScheduleList } from '@core/guest.interfaces'

@Component({
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
	readonly scheduleList: ScheduleList = [
		{
			label: 'SCHEDULE.RELIGIOUS_CEREMONY',
			time: '4:00 PM',
			delay: '',
			maps: {
				google: '#',
				waze: '#',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '7:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				google: '#',
				waze: '#',
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
}
