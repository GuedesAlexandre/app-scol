import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Specialite } from 'src/app/models/specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{

  specialites: Specialite[] = [];
  constructor(private specialiteservice: SpecialiteService) { }
  ngOnInit(): void {
    
      this.specialites = this.specialiteservice.getSpecialite();
      console.log(this.specialites);
  }

}
