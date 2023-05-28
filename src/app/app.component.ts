import { Component, OnInit, inject } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
	private readonly translateService = inject(TranslateService)

	ngOnInit(): void {
		const browserLang = this.translateService.getBrowserLang()

		this.translateService.addLangs(['es', 'en'])
		this.translateService.setDefaultLang(browserLang)
		this.translateService.use(browserLang)
	}
}
