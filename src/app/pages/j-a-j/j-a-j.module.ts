import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { JAJComponent } from './j-a-j.component'
import { JAJRoutingModule } from './j-a-j-routing.module'

@NgModule({
	declarations: [JAJComponent],
	imports: [CommonModule, JAJRoutingModule, TranslateModule],
})
export class JAJModule {}
