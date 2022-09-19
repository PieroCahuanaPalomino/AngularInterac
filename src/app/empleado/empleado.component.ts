import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre ="Juan"
  apellido = "Chuna"
  private edad= 18
  empresa = "Lex"
  empresa2 = " "

  getEdad(){
    return this.edad;
  }



  constructor() { }

  ngOnInit(): void {
  }

  llamaEmpresa(empresa:String){}


}
