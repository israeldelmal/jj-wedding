import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

import { combineLatest, filter } from 'rxjs'

import { GUEST_LIST } from '@core/guest-list'
import { GlobalState } from '@core/global.state'

@Component({
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	private readonly router = inject(Router)
	private readonly activatedRoute = inject(ActivatedRoute)
	private readonly globalState = inject(GlobalState)

	readonly ornaments = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

	readonly light$ = combineLatest([
		this.globalState.guest,
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
	])

	currentPath = this.router.url

	get isLightStyle(): boolean {
		const { guestId } = this.globalState.guest.value

		return this.currentPath === `/${guestId}`
	}

	ngOnInit(): void {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(({ urlAfterRedirects }: NavigationEnd) => {
				this.currentPath = urlAfterRedirects
			})

		this.activatedRoute.params.subscribe(({ guest: guestId }) => {
			if (GUEST_LIST[guestId]) {
				const guest = GUEST_LIST[guestId]

				localStorage.setItem('guest', JSON.stringify(guest))
				this.globalState.guest.next(guest)
			} else {
				localStorage.clear()
				this.globalState.guest.next(null)
				this.router.navigate(['/sin-invitacion'])
			}
		})
	}
}