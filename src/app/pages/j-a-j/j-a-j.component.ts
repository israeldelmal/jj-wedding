import { Component } from '@angular/core'

@Component({
	templateUrl: './j-a-j.component.html',
	styleUrls: ['./j-a-j.component.scss'],
})
export class JAJComponent {
	readonly message = `
        Ahora nuestros sueños se hacen realidad\n
        A través de los buenos y los malos tiempos\n
        Sí, estaré justo a tu lado\n
        No es muy difícil notarlo\n
        Estamos en el cielo.
    `
	readonly images = Array.from({ length: 10 }).map(
		(_, index) => `assets/images/slider/slide-${index + 1}.webp`
	)
}
