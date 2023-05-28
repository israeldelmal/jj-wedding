import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { GiftTableComponent } from './gift-table.component'
import { GiftTableRoutingModule } from './gift-table-routing.module'

@NgModule({
	declarations: [GiftTableComponent],
	imports: [CommonModule, GiftTableRoutingModule, TranslateModule],
})
export class GiftTableModule {}
