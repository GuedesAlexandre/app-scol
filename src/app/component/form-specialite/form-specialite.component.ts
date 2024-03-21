import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Specialite } from 'src/app/models/specialite';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrls: ['./form-specialite.component.css']
})
export class FormSpecialiteComponent implements OnInit {
  specialiteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.specialiteForm = this.fb.group({
      _libelle: ['', Validators.required],
      _idSpec: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const specialite: Specialite = new Specialite(
      this.specialiteForm.value._libelle,
      this.specialiteForm.value._idSpec
    );

    alert("Spécialité ajoutée avec succès");
    localStorage.setItem('specialite', JSON.stringify(specialite));
  }
}
