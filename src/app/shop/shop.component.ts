import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  lesShortsTest = [
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

  lesShorts:any = [];

  apiAll(){
    this.httpClient.get('http://localhost:8000/shorts')
      .subscribe(LesShortsReponse => {
        this.lesShorts.push(LesShortsReponse);
      });
  }

}
