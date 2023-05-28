import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { GiftTableComponent } from './gift-table.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: GiftTableComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class GiftTableRoutingModule {}
