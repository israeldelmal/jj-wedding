import { Component, inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	template: `
		<h1 mat-dialog-title>{{ 'GIFT_TABLE.DIALOG.LABEL' | translate }}</h1>
		<section mat-dialog-content>
			<p>{{ 'GIFT_TABLE.DIALOG.CLIPBOARD' | translate : { value: data } }}</p>
			<p>{{ 'GIFT_TABLE.DIALOG.MESSAGE' | translate }}</p>
		</section>
		<footer mat-dialog-actions align="end">
			<button mat-dialog-close mat-flat-button>
				{{ 'BUTTONS.CLOSE' | translate }}
			</button>
		</footer>
	`,
	styles: [
		`
			h1 {
				text-align: center;
			}

			p {
				text-align: center;
				margin-bottom: 2rem;
				font-size: 1rem;

				&:last-of-type {
					margin-bottom: 0;
				}
			}
		`,
	],
})
export class GiftTableDialogComponent {
	readonly data: 'BBVA' | 'Santander' = inject(MAT_DIALOG_DATA)
}
