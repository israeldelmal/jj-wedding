import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { Navigation } from '@components/navigation'
import { Ornament } from '@components/ornament'

import { LayoutComponent } from './layout.component'

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, RouterModule, Navigation, Ornament],
})
export class LayoutModule {}
