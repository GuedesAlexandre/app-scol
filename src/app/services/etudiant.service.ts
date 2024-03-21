import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  private data: any[] = [
    {
      nom: 'RIVAY',
      prenom: 'Claude',
      adresse: '24 rue de Montreuil',
      code_postal: '75020',
      ville: 'Paris',
      email: 'no_adr1@vol.org',
      genre: 'Homme',
      age: 20,
      identifiant: 10101,
    },
    {
      nom: 'BOUNAR',
      prenom: 'Mehdi',
      adresse: '10 Bd. Voltaire',
      code_postal: '75011',
      ville: 'Paris',
      email: 'no_adr2@vol.org',
      genre: 'Homme',
      age: 25,
      identifiant: 10201,
    },
    {
      nom: 'RATTIER',
      prenom: 'Liza',
      adresse: '44 rue de Montreuil',
      code_postal: '75020',
      ville: 'Paris',
      email: 'no_adr10@vol.org',
      genre: 'Femme',
      age: 19,
      identifiant: 11553,
    },
    {
      nom: 'Edme',
      prenom: 'Liza',
      adresse: '12 rue de Montreuil',
      code_postal: '75020',
      ville: 'Paris',
      email: 'no_adr3@vol.org',
      genre: 'Femme',
      age: 21,
      identifiant: 12124,
    },
    {
      nom: 'LEE',
      prenom: 'Yan Fu',
      adresse: '113 Av. Gl De Gaule',
      code_postal: '92000',
      ville: 'Nanterre',
      email: 'no_adr4@vol.org',
      genre: 'Homme',
      age: 22,
      identifiant: 21094,
    },
    {
      nom: 'VERIN',
      prenom: 'Eric',
      adresse: '10-Bis rue Saint Maur',
      code_postal: '77000',
      ville: 'Melun',
      email: 'no_adr5@vol.org',
      genre: 'Homme',
      age: 33,
      identifiant: 50001,
    },
    {
      nom: 'LEROY',
      prenom: 'Axelle',
      adresse: '11 Av. Gl De Gaule',
      code_postal: '77100',
      ville: 'Meaux',
      email: 'no_adr6@vol.org',
      genre: 'Femme',
      age: 40,
      identifiant: 55001,
    },
    {
      nom: 'FISCHER',
      prenom: 'Morgane',
      adresse: '5 rue de la Pierre Levée',
      code_postal: '94500',
      ville: 'Champigny/Marne',
      email: 'no_adr7@vol.org',
      genre: 'Femme',
      age: 41,
      identifiant: 65002,
    },
    {
      nom: 'BENALI',
      prenom: 'Mira',
      adresse: '21 rue de Valvin',
      code_postal: '94300',
      ville: 'Vincennes',
      email: 'no_adr8@vol.org',
      genre: 'Femme',
      age: 19,
      identifiant: 11576,
    },
    {
      nom: 'CEZAIRE',
      prenom: 'Joël',
      adresse: '56 rue de Liege',
      code_postal: '77550',
      ville: 'Moissy',
      email: 'no_adr9@vol.org',
      genre: 'Homme',
      age: 33,
      identifiant: 11131,
    },
    
  ];

  etudiants: Etudiant[] = this.data.map((item: any) => {
    return new Etudiant(
      item.nom,
      item.prenom,
      item.adresse,
      item.code_postal,
      item.ville,
      item.email,
      item.genre,
      item.age.toString(),
      item.identifiant.toString(),
    );
  });

  constructor() {}

  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }
}
