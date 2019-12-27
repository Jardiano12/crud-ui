import { DetalheFuncionarioComponent } from '../detalhe-funcionario/detalhe-funcionario.component';
import { Observable } from "rxjs";


import { Router } from '@angular/router';
import {Funcionario} from '../model/Funcionario.js';
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']

})
export class ListaFuncionarioComponent implements OnInit {
  employees: Observable<Funcionario[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  employeeUpdate(id: number){
    this.router.navigate(['update', id]);
  }


}
