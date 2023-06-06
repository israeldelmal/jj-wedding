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
				google: 'https://www.google.com/maps/place/Parroquia+del+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+%22Templo+de+Santa+Clara%22/@20.5911137,-100.3949025,17.44z/data=!4m6!3m5!1s0x85d35b2aecec2417:0x5934cf87922b8a1d!8m2!3d20.5920313!4d-100.3945174!16s%2Fg%2F1tg2dvk0',
				waze: '#',
				buildingName: 'Parroquia del Sagrado Corazón de Jesús "Templo de Santa Clara"',
				image: 'assets/images/church.webp',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '7:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				google: 'https://www.google.com/search?rlz=1C1GCEA_enMX965MX965&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=AJOqlzUrdEXYqqTIuJVIMRzDMAV2DtOgMQ:1679603771316&q=hacienda+san+antonio+del+battan+salon+del+lago&rflfq=1&num=10&ved=2ahUKEwijh5zR8_L9AhXdIUQIHcfBC9gQtgN6BAgMEAc#rlfi=hd:;si:15392171566378391562,l,Ci5oYWNpZW5kYSBzYW4gYW50b25pbyBkZWwgYmF0dGFuIHNhbG9uIGRlbCBsYWdvSPjHtfzKsYCACFpKEAUQBhAHGAAYARgCGAMYBBgFGAYYByIuaGFjaWVuZGEgc2FuIGFudG9uaW8gZGVsIGJhdHRhbiBzYWxvbiBkZWwgbGFnbyoCCAKSARZmdW5jdGlvbl9yb29tX2ZhY2lsaXR5mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJQYUhaRFNGbDNFQUWqATcQASoSIg5zYWxvbiBkZWwgbGFnbygOMh8QASIbs-li0b135xm_Rdo5u41uwr9KQK6r8L5uB6c_,y,IFLcrsmWd0A;mv:[[20.50785059202625,-100.41561792363434],[20.502152766886685,-100.42759130467682]]',
				waze: '#',
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

	openApp(url: string): void {
		window.location.href = url
	}
}
