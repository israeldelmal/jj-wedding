import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { JAJComponent } from './j-a-j.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: JAJComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class JAJRoutingModule {}
