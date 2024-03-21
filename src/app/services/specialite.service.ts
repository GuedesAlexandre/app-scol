import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';
@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  data: any[] = [
    {
        "nom": "DEV APP",
        "id": 1
    },
    {
        "nom": "ING RESEAUX",
        "id": 2
    },
    {
        "nom": "INTEGRATEUR",
        "id": 3
    },
    {
        "nom": "CHEF DE PROJET",
        "id": 4
    },
    {
        "nom": "INFOGRAPHISTE",
        "id": 5
    },
    {
        "nom": "UX DESIGNER",
        "id": 6
    },
    {
        "nom": "DEVELOPPEUR MOBILE",
        "id": 7
    },
    {
      "nom": "Devops",
      "id": 8
  },
  {
    "nom": "Sysops",
    "id": 9
},
{
  "nom": "Lead CTO",
  "id": 10
}
]

Specialite : Specialite[] = this.data.map((item: any) => {
  return new Specialite(
    item.nom,
    item.id
  );
});

getSpecialite():any{
  return this.Specialite;
}


constructor() { }

}


