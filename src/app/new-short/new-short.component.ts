import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-short',
  templateUrl: './new-short.component.html',
  styleUrls: ['./new-short.component.css']
})
export class NewShortComponent implements OnInit {

  createShort(){
    this.httpClient.post('http://localhost:8000/short/create', {
        name: "un nom",
        taille: "azea",
        couleur: "magenta"
    }).subscribe(data =>{
      console.log(data);
    })

  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createShort();
  }

}
