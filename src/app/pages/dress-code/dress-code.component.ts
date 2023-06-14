import { Component } from '@angular/core'

@Component({
	template: `
		<h1 class="cursive center-line animate__animated animate__fadeInUp">
			{{ 'DRESS_CODE.LABEL' | translate }}
		</h1>
		<div class="animate__animated animate__fadeInDown animate__delay-1s">
			<img src="assets/images/man.webp" alt="Hombre" />
			<img src="assets/images/woman.webp" alt="Mujer" />
		</div>
		<p class="cursive animate__animated animate__fadeInUp animate__delay-2s">
			{{ 'DRESS_CODE.MESSAGE' | translate }}
		</p>
	`,
	styles: [
		`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 100%;
				height: calc(100vh - 4rem);
				gap: 2rem 0;
				padding: 0 1rem;
			}

			* {
				text-align: center;
			}

			h1 {
				font-size: 3rem;
			}

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0 4rem;

				img {
					display: inline-block;
					width: auto;
					height: 16rem;
				}
			}

			p {
				font-size: 1.5rem;
			}
		`,
	],
})
export class DressCodeComponent {}
