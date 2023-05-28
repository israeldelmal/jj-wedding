import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { OurDreamsComponent } from './our-dreams.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: OurDreamsComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class OurDreamsRoutingModule {}
