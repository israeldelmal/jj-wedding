import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ClipboardModule } from '@angular/cdk/clipboard'

import { TranslateModule } from '@ngx-translate/core'

import { GiftTableDialogComponent } from './gift-table-dialog.component'

@NgModule({
	declarations: [GiftTableDialogComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		ClipboardModule,
		TranslateModule,
	],
})
export class GiftTableDialogModule {}
