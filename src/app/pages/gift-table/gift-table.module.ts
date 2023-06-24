import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { ClipboardModule } from '@angular/cdk/clipboard'

import { TranslateModule } from '@ngx-translate/core'

import { GiftTableComponent } from './gift-table.component'
import { GiftTableRoutingModule } from './gift-table-routing.module'
import { GiftTableDialog } from './components/gift-table-dialog'

@NgModule({
	declarations: [GiftTableComponent],
	imports: [
		CommonModule,
		GiftTableRoutingModule,
		MatDialogModule,
		ClipboardModule,
		TranslateModule,
		GiftTableDialog,
	],
})
export class GiftTableModule {}
