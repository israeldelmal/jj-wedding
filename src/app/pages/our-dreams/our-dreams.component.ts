import { Component, inject } from '@angular/core'

import { map } from 'rxjs'

import { GlobalState } from '@core/global.state'

@Component({
	template: `
		<ng-container *ngIf="ourDreams$ | async as data">
			<img
				src="assets/images/jj-main-img.webp"
				alt="J&J"
				class="animate__animated animate__fadeInDown"
			/>
			<p class="cursive animate__animated animate__fadeInUp animate__delay-1s">
				{{ data.message }}
			</p>
			<sub class="cursive animate__animated animate__fadeInDown animate__delay-2s">
				{{ data.sub }}
			</sub>
		</ng-container>
	`,
	styleUrls: ['./our-dreams.component.scss'],
})
export class OurDreamsComponent {
	private readonly glogalState = inject(GlobalState)

	readonly ourDreams$ = this.glogalState.guest$.pipe(
		map(({ ourDreams: { message, sub } }) => ({ message, sub }))
	)
}
