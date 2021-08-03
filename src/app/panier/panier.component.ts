import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier = [{"id":1,"name":"jesuisunnom","couleur":"jesuisunecouleur","taille":"jesuisunetaille"},{"id":7,"name":"zaezaeza","couleur":"azeza","taille":"azezae"},{"id":8,"name":"zaezaeza","couleur":"azeza","taille":"azezae"}];

  constructor() { }

  ngOnInit(): void {
  }

}
