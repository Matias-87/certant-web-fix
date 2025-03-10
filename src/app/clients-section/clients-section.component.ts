import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-section',
  standalone: true,
  templateUrl: './clients-section.component.html',
  styleUrl: './clients-section.component.scss'
})
export class ClientsSectionComponent implements OnInit {
  clientLogos: string[][] = [
    ['./imgs/clientes/BCBA.png', 'logo BCBA'],
    ['./imgs/clientes/banco-provincia.png', 'logo banco provincia'],
    ['./imgs/clientes/santander.png', 'logo santander'],
    ['./imgs/clientes/Logo_Oficial_Banco_Comafi.png', 'logo comafi'],
    ['./imgs/clientes/itau.png', 'logo itau'],
    ['./imgs/clientes/iplan.jpg', 'logo iplan'],
    ['./imgs/clientes/logo_turismo.gif', 'logo turismo'],
    ['./imgs/clientes/nextel.png', 'logo nextel'],
  ] 

  ngOnInit(): void {
    for (let i = 0; i < 2; i++) {
      this.clientLogos.forEach(logo => {
        this.clientLogos.push(logo);
      });
    }
  }
}
