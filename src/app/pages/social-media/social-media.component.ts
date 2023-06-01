import { Component } from '@angular/core'

@Component({
	template: `
		<p class="cursive animate__animated animate__fadeInDown">
			{{ 'SOCIAL_MEDIA.MESSAGE' | translate }}
		</p>
		<span class="animate__animated animate__fadeInUp animate__delay-1s">#Ms&MrValencia</span>
	`,
	styles: [
		`
			:host {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: calc(100% - 4rem);
				gap: 2rem 0;
			}

			p {
				text-align: center;
				font-size: 1.75rem;
			}

			span {
				display: inline-block;
				font-size: 2rem;
				font-weight: bold;
			}
		`,
	],
})
export class SocialMediaComponent {}
