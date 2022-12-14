import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/service/token.service';
import { PersonaService } from '../../../service/persona.service';
import { persona } from '../../model/persona.model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
    }

    cargarPersona(){
      this.personaService.detail(1).subscribe(
        data =>{
          this.persona = data
        }
      )
    }
}
