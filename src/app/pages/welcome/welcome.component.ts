import { Component, inject } from '@angular/core'

import { map, timer } from 'rxjs'

import { GlobalState } from '@core/global.state'

@Component({
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
	private readonly globalState = inject(GlobalState)

	readonly guest$ = this.globalState.guest$
	readonly weddingDate = new Date('2023-10-07T21:00:00.000Z')
}
