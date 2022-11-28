

import {  Employee } from '../employee'
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Router }from '@angular/router';
@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent  {
  employee: Employee = new Employee();

constructor(private employeeService :EmployeeService,private router : Router){}

saveEmployeee(){
  this.employeeService.createEmployee(this.employee).subscribe(
    data=>{
      console.log(data),
      this.goToListEmployee();
    },
    error => console.log(error));
  
}

goToListEmployee(){ this.router.navigate(['/employees']);}

onSubmit(){ this.saveEmployeee();}
}
