import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IEmployee {
  name: string;
  designation: string;
  experience: string;
  gender: string;
  jobType: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employees: IEmployee[] = [
    {
      name: "Saumitra Vyas",
      designation: "Software Engineer",
      experience: "1 Year",
      gender: "Male",
      jobType: "Intern"
    },
    {
      name: "Lalit",
      designation: "Data Engineer",
      experience: "2 Year",
      gender: "Male",
      jobType: "Intern"
    },
    {
      name: "Aman Kumar",
      designation: "Physicist",
      experience: "5 Year",
      gender: "Male",
      jobType: "External"
    }
  ];

  etypes: string[] = [
    "Intern", "Full-time", "Student", "External"
  ];

  formVisible: string = "grid";
  selectedEmployeeIndex: number | null = null;
  selectedEmployee: IEmployee = {
    name: "",
    designation: "",
    experience: "",
    gender: "",
    jobType: ""
  };
  formAction: string = "Add Employee";

  ngOnInit(): void {
   
  }

  toggleForm() {
    this.formVisible = this.formVisible === "grid" ? "form" : "grid";
    this.formAction = this.formVisible === "grid" ? "Add Employee" : "Update Employee";
    this.selectedEmployeeIndex = null;
    this.selectedEmployee = {
      name: "",
      designation: "",
      experience: "",
      gender: "",
      jobType: ""
    };
  }

  editEmployee(employee: IEmployee, index: number) {
    this.selectedEmployee = { ...employee };
    this.selectedEmployeeIndex = index;
    this.formVisible = "form";
    this.formAction = "Update Employee";
  }

  cancelEdit() {
    this.formVisible = "grid";
    this.formAction = "Add Employee";
    this.selectedEmployeeIndex = null;
    this.selectedEmployee = {
      name: "",
      designation: "",
      experience: "",
      gender: "",
      jobType: ""
    };
  }

  onSubmit(formData: NgForm) {
    if (formData.valid) {
      console.log(formData);
      const values = formData.value;
      const emp: IEmployee = {
        name: values.EName,
        designation: values.EDesignation,
        experience: values.EExperience,
        gender: values.EGender,
        jobType: values.EType
      }

      if (this.formAction === "Add Employee") {
        this.employees.push(emp);
      } else if (this.formAction === "Update Employee" && this.selectedEmployeeIndex !== null) {
        
        this.employees.splice(this.selectedEmployeeIndex, 1, emp);
      }

      // sessionStorage.setItem("empdata", JSON.stringify(this.employees));
      formData.resetForm();
      this.cancelEdit();
    }
  }

  trackByFn(index: number, item: IEmployee) {
    return index; 
  }
}
