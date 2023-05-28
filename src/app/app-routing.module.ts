import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@components/layout/layout.component'
import { NoInvitationComponent } from '@pages/no-invitation/no-invitation.component'

const routes: Routes = [
	{
		path: 'sin-invitacion',
		component: NoInvitationComponent,
	},
	{
		path: ':guest',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@pages/welcome').then((m) => m.WelcomePage),
			},
			{
				path: 'pases',
				loadChildren: () => import('@pages/passes').then((m) => m.PassesPage),
			},
			{
				path: 'cronograma',
				loadChildren: () => import('@pages/schedule').then((m) => m.SchedulePage),
			},
			{
				path: 'jenny-y-jorge',
				loadChildren: () => import('@pages/j-a-j').then((m) => m.JAJPage),
			},
			{
				path: 'nuestros-suenos',
				loadChildren: () => import('@pages/our-dreams').then((m) => m.OurDreamsPage),
			},
			{
				path: 'mesa-de-regalos',
				loadChildren: () => import('@pages/gift-table').then((m) => m.GiftTablePage),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'sin-invitacion',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
