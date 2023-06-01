import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TranslateModule } from '@ngx-translate/core'

import { SocialMediaComponent } from './social-media.component'
import { SocialMediaRoutingModule } from './social-media-routing.module'

@NgModule({
	declarations: [SocialMediaComponent],
	imports: [CommonModule, SocialMediaRoutingModule, TranslateModule],
})
export class SocialMediaModule {}
