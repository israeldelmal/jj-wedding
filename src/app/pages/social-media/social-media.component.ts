import { Component, inject } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

import { TranslateService } from '@ngx-translate/core'

@Component({
	templateUrl: './social-media.component.html',
	styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
	private readonly snackBar = inject(MatSnackBar)
	private readonly translateService = inject(TranslateService)

	readonly hashtag = '#bodajorgeyjenny'
	readonly rippleColor = 'rgb(0 0 0 / 8%)'
	readonly socialMedia = [
		{
			profile: 'Jennifer',
			image: 'assets/images/profile-jenny.webp',
			instagram: 'https://instagram.com/jenn_peloza',
			facebook: 'https://www.facebook.com/pik0s',
			delay: 'animate__delay-2s',
		},
		{
			profile: 'Jorge',
			image: 'assets/images/profile-jorge.webp',
			instagram: 'https://instagram.com/jorch_valencia',
			facebook: 'https://www.facebook.com/Jorge.Alberto.Valencia.Camacho',
			delay: 'animate__delay-3s',
		},
	]

	copyToClipboard() {
		this.translateService.stream('SOCIAL_MEDIA.CLIPBOARD').subscribe((message: string) => {
			this.snackBar.open(message, 'Ok!', {
				panelClass: 'custom-snackbar',
				duration: 5000,
			})
		})
	}
}
