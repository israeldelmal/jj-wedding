import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatRippleModule } from '@angular/material/core'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ClipboardModule } from '@angular/cdk/clipboard'

import { TranslateModule } from '@ngx-translate/core'

import { SocialMediaComponent } from './social-media.component'
import { SocialMediaRoutingModule } from './social-media-routing.module'

@NgModule({
	declarations: [SocialMediaComponent],
	imports: [
		CommonModule,
		SocialMediaRoutingModule,
		MatRippleModule,
		MatSnackBarModule,
		ClipboardModule,
		TranslateModule,
	],
})
export class SocialMediaModule {}
