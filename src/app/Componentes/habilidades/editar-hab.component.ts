import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/service/habilidades.service';

@Component({
  selector: 'app-editar-hab',
  templateUrl: './editar-hab.component.html',
  styleUrls: ['./editar-hab.component.css']
})
export class EditarHabComponent implements OnInit {
  habilidad: Habilidades = null;

  constructor(private habilidadS: HabilidadesService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadS.detail(id).subscribe(
      data =>{
        this.habilidad = data;
      }, err => {
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadS.update(id, this.habilidad).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al intentar modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
