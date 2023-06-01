import { Component, inject } from '@angular/core'
import { GlobalState } from '@core/global.state'
import { map } from 'rxjs'

@Component({
	templateUrl: './j-a-j.component.html',
	styleUrls: ['./j-a-j.component.scss'],
})
export class JAJComponent {
	private readonly glogalState = inject(GlobalState)

	readonly ourDreams$ = this.glogalState.guest$.pipe(
		map(({ ourDreams: { message, sub } }) => ({ message, sub }))
	)
	readonly slides$ = this.glogalState.guest$.pipe(
		map(({ ourDreams: { message, sub } }) => [
			{
				img: 'assets/images/slider/slide-1.webp',
				message,
				sub,
			},
			{
				img: 'assets/images/slider/slide-2.webp',
			},
			{
				img: 'assets/images/slider/slide-3.webp',
			},
			{
				img: 'assets/images/slider/slide-4.webp',
			},
			{
				img: 'assets/images/slider/slide-5.webp',
			},
			{
				img: 'assets/images/slider/slide-6.webp',
			},
		])
	)
}
