import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shortsTest = [
    {
      "id": 1,
      "name": "jesuisunnom",
      "couleur": "jesuisunecouleur",
      "taille": "jesuisunetaille"
    },
    {
      "id": 2,
      "name": "jesuisunnom",
      "couleur": "jesuisunecouleur",
      "taille": "jesuisunetaille"
    },
    {
      "id": 3,
      "name": "jesuisunnom",
      "couleur": "jesuisunecouleur",
      "taille": "jesuisunetaille"
    },
    {
      "id": 4,
      "name": "jesuisunnom",
      "couleur": "jesuisunecouleur",
      "taille": "jesuisunetaille"
    },
    {
      "id": 6,
      "name": "jesuisunnom2",
      "couleur": "jesuisunecouleur2",
      "taille": "jesuisunetaille2"
    }
  ];


}
