import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/service/habilidades.service';

@Component({
  selector: 'app-nueva-hab',
  templateUrl: './nueva-hab.component.html',
  styleUrls: ['./nueva-hab.component.css']
})
export class NuevaHabComponent implements OnInit {
  nombre: string;
  porcentaje:number;

  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidades = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadesS.save(habilidades).subscribe(
      data =>{
        alert("Habilidad creada satisfactoriamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al crear la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
