import { Component, inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

import { TranslateService } from '@ngx-translate/core'

@Component({
	template: `
		<h1 mat-dialog-title>{{ 'GIFT_TABLE.DIALOG.LABEL' | translate }}</h1>
		<section mat-dialog-content>
			<div class="container">
				<p>{{ 'GIFT_TABLE.DIALOG.MESSAGE' | translate }}</p>
				<p>{{ 'GIFT_TABLE.DIALOG.BANK_INFO' | translate : { value: data } }}</p>
				<button
					type="button"
					mat-flat-button
					color="primary"
					[style.width.%]="100"
					[cdkCopyToClipboard]="accounts[data].clabe"
					(click)="onCopyClipboard()"
				>
					<mat-icon>content_copy</mat-icon>
					<span>CLABE</span>
				</button>
				<div>
					<h2>Número de tarjeta</h2>
					<strong>{{ accounts[data].account }}</strong>
				</div>
			</div>
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
				font-size: 1rem;
			}

			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 1rem 0;
			}

			h2 {
				font-size: 1rem;
				text-align: center;
				margin-bottom: 0.5rem;
			}

			strong {
				width: auto;
				display: inline-block;
				font-size: 1.5rem;
			}
		`,
	],
})
export class GiftTableDialogComponent {
	private readonly snackBar = inject(MatSnackBar)
	private readonly translate = inject(TranslateService)

	readonly data: 'BBVA' | 'Santander' = inject(MAT_DIALOG_DATA)
	readonly accounts = {
		BBVA: {
			clabe: '4152313536243897',
			account: '4152 3135 3624 3897',
		},
		Santander: {
			clabe: '014680200093976195',
			account: '5579 0990 0991 7974',
		},
	}

	onCopyClipboard(): void {
		this.translate.stream('GIFT_TABLE.DIALOG.SNACK_BAR_MESSAGE').subscribe((message) => {
			this.snackBar.open(message, 'Ok', {
				duration: 3000,
			})
		})
	}
}
