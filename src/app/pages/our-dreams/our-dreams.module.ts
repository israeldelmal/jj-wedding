import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { OurDreamsComponent } from './our-dreams.component'
import { OurDreamsRoutingModule } from './our-dreams-routing.module'

@NgModule({
	declarations: [OurDreamsComponent],
	imports: [CommonModule, OurDreamsRoutingModule],
})
export class OurDreamsModule {}
