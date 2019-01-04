import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
export interface State {
  name: string;
  id: number;
}
@Component({
  selector: 'app-hour-create',
  templateUrl: './hour-create.component.html',
  styleUrls: ['./hour-create.component.css']
})
export class HourCreateComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  states: State[] = [
    {
      name: 'Assigned',
      id: 1
    },
    {
      name: 'Progress',
      id: 2,
    },
    {
      name: 'Wait',
      id: 3,
    },
    {
      name: 'Test',
      id: 4,
    },
    {
      name: 'Completed',
      id: 5,
    }
  ];
  createForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private formBuilder: FormBuilder,private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
    this.createForm = this.formBuilder.group({
      IdTask: ['', Validators.required],
      HoursTime: ['', Validators.required],
      Status: []

    });

  }
  get f() { return this.createForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createForm.invalid) {
      return;
    }
    this.spinner.show();
    
    this.router.navigate(["/"]);

    this.spinner.hide();
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    const objeto = this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    console.log(objeto);
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
