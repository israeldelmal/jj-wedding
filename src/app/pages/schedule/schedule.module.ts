import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { ScheduleComponent } from './schedule.component'
import { ScheduleRoutingModule } from './schedule-routing.module'

@NgModule({
	declarations: [ScheduleComponent],
	imports: [CommonModule, ScheduleRoutingModule, TranslateModule],
})
export class ScheduleModule {}
