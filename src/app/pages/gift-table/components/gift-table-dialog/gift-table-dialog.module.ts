import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

import { TranslateModule } from '@ngx-translate/core'

import { GiftTableDialogComponent } from './gift-table-dialog.component'

@NgModule({
	declarations: [GiftTableDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
})
export class GiftTableDialogModule {}
