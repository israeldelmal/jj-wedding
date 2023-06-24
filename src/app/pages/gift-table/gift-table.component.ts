import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { GiftTableDialogComponent } from './components/gift-table-dialog/gift-table-dialog.component'

@Component({
	templateUrl: './gift-table.component.html',
	styleUrls: ['./gift-table.component.scss'],
})
export class GiftTableComponent {
	private readonly dialog = inject(MatDialog)

	readonly accounts = {
		bbva: '4152313536243897',
		santander: '014680200093976195',
	}
	readonly iconSize = 48

	onOpenDialog(bank: 'BBVA' | 'Santander'): void {
		const data = bank

		this.dialog.open(GiftTableDialogComponent, {
			data,
			autoFocus: false,
			maxWidth: 'calc(100vw - 2rem)',
		})
	}
}
