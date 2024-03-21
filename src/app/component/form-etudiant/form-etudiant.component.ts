import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiantForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.etudiantForm = this.fb.group({
      _nom: ['', Validators.required],
      _prenom: ['', Validators.required],
      _rue: ['', Validators.required],
      _cp: ['', Validators.required],
      _ville: ['', Validators.required],
      _courriel: ['', [Validators.required, Validators.email]],
      _genre: ['', Validators.required],
      _age: ['', Validators.required],
      _idCand: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const etudiant: Etudiant = new Etudiant(
      this.etudiantForm.value._nom,
      this.etudiantForm.value._prenom,
      this.etudiantForm.value._rue,
      this.etudiantForm.value._cp,
      this.etudiantForm.value._ville,
      this.etudiantForm.value._courriel,
      this.etudiantForm.value._genre,
      this.etudiantForm.value._age,
      this.etudiantForm.value._idCand
    );
      alert("Etudiant ajouté avec succès")
    localStorage.setItem('etudiant', JSON.stringify(etudiant));
  }
}
