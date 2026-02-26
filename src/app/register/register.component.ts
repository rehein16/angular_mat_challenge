import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  submitted = false;
  country: string = '';
  interests: string[] = [];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  submitted = false;
  country: string = '';
  hidePassword = true;

  // Autocomplete options
  addressOptions: string[] = [
    'Angeles City, Pampanga',
    'Manila, Metro Manila',
    'Cebu City, Cebu',
    'Davao City, Davao del Sur',
    'Quezon City, Metro Manila',
    'Makati City, Metro Manila',
    'Pasig City, Metro Manila',
    'Taguig City, Metro Manila',
  ];
  filteredAddresses!: Observable<string[]>;

  // Country options for select
  countries: string[] = [
    'Philippines', 'United States', 'Japan', 'South Korea',
    'Australia', 'Canada', 'United Kingdom', 'Singapore'
  ];

  // Chips for interests
  availableInterests: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'TypeScript', 'Python', 'Java', 'UI/UX'];
  selectedInterests: string[] = [];

  formData: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    angularSkillLevel: new FormControl(5),
    agreeTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(private snackBar: MatSnackBar, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.filteredAddresses = this.formData.controls['address'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterAddresses(value || ''))
    );
  }

  private _filterAddresses(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.addressOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  toggleInterest(interest: string): void {
    const idx = this.selectedInterests.indexOf(interest);
    if (idx >= 0) {
      this.selectedInterests.splice(idx, 1);
    } else {
      this.selectedInterests.push(interest);
    }
  }

  isInterestSelected(interest: string): boolean {
    return this.selectedInterests.includes(interest);
  }

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    birthDate: Date;
    address: string;
    country: string;
    angularSkillLevel: number;
  }): void {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.country = data.country;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;

    if (this.formData.valid) {
      console.log('Form Submitted!', this.formData.value);
      this.snackBar.open('Registration Successful! 🎉', 'Close', {
        duration: 4000,
        panelClass: ['success-snackbar']
      });
    } else {
      console.log('Form is not valid!');
      this.snackBar.open('Please fill all required fields correctly.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  getSkillLabel(value: number): string {
    const labels: { [key: number]: string } = {
      1: 'Beginner', 2: 'Beginner', 3: 'Elementary',
      4: 'Elementary', 5: 'Intermediate', 6: 'Intermediate',
      7: 'Advanced', 8: 'Advanced', 9: 'Expert', 10: 'Expert'
    };
    return labels[value] || value.toString();
  }
}
