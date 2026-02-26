# angular_mat_demo

Angular Material Hands-on Demo — Finals Lab Activity 4

## About
A complete registration form built with Angular 17 and Angular Material components, featuring reactive forms, form validation, and various input types.

## Angular Material Components Used

### From the Demo (Original):
1. **MatInputModule** — Text input fields (username, email, password, address)
2. **MatFormFieldModule** — Form field wrappers with labels and errors
3. **MatButtonModule** — Submit and reset buttons
4. **MatCheckboxModule** — Terms & conditions checkbox
5. **MatRadioModule** — Gender radio buttons
6. **MatDatepickerModule** — Birth date picker
7. **MatAutocompleteModule** — Address autocomplete suggestions
8. **MatSliderModule** — Angular skill level slider
9. **MatCardModule** — Registration and result cards
10. **MatToolbarModule** — Top app toolbar
11. **MatIconModule** — Material icons throughout

### Added (3+ Extra Components):
12. **MatSelectModule** — Country dropdown select *(Extra #1)*
13. **MatProgressBarModule** — Visual skill progress bar *(Extra #2)*
14. **MatChipsModule** — Tech interests chip selection *(Extra #3)*
15. **MatSnackBarModule** — Success/error notification toasts *(Extra #4)*
16. **MatTooltipModule** — Tooltips on password toggle and submit *(Extra #5)*

## Setup & Run

```bash
npm install
ng serve
```

Then open: http://localhost:4200

## Build

```bash
ng build
```

## Project Structure

```
src/
├── app/
│   ├── app.module.ts         # All Angular Material imports
│   ├── app.component.ts      # Root component with toolbar
│   └── register/
│       ├── register.component.ts   # Form logic, data model, validation
│       ├── register.component.html # Angular Material template
│       └── register.component.css  # Component styles
├── index.html
├── main.ts
└── styles.css
```

## Key Features
- Reactive Forms with FormGroup & FormControl
- Full form validation with error messages
- Password show/hide toggle
- Autocomplete for address field
- Skill level slider with progress bar visualization
- Interactive chip selection for tech interests
- Country dropdown with MatSelect
- Form submission summary displayed after valid submit
- Snack bar notifications on submit
