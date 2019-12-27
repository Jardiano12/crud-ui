import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Funcionario} from '../model/Funcionario.js';

@Component({
  selector: 'app-detalhe-funcionario',
  templateUrl: './detalhe-funcionario.component.html',
  styleUrls: ['./detalhe-funcionario.component.css']
})
export class DetalheFuncionarioComponent implements OnInit {


  id: number;
  employee: Funcionario;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Funcionario();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
