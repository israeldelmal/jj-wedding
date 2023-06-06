import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { LodgingComponent } from './lodging.component'
import { LodgingRouterModule } from './lodging-router.module'

@NgModule({
	declarations: [LodgingComponent],
	imports: [CommonModule, LodgingRouterModule, TranslateModule],
})
export class LodgingModule {}
