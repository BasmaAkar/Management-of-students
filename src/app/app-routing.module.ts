
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeesComponent} from './create-employees/create-employees.component'

const routes: Routes = [
  {path: 'employees' , component: EmployeeListComponent},
  { path: 'create-employees' , component: CreateEmployeesComponent },
  {path:'' , redirectTo: 'employees' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
