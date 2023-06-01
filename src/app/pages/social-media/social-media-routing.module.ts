import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SocialMediaComponent } from './social-media.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: SocialMediaComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class SocialMediaRoutingModule {}
