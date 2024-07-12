# Multi-Step React Form

This project demonstrates a multi-step form implementation in React.js using Bootstrap for styling and transitions. The form collects personal information and address details across three steps, validating user input at each step before allowing progression to the next.

## Hosted Link

The project is hosted at [https://multi-step-form-234z.onrender.com](https://multi-step-form-234z.onrender.com).


## Features

- **Multi-Step Form**: Divided into three sequential steps to collect user information progressively.
- **Form Validation**: Client-side validation ensures required fields are filled and data formats are correct.
- **LocalStorage Persistence**: Form data is stored locally in the browser's `localStorage`, allowing users to resume where they left off even after refreshing the page.
- **Bootstrap Integration**: Utilizes Bootstrap for responsive design, form styling, and transitions between steps.

## Technologies Used

- React.js
- Bootstrap
- JavaScript (ES6+)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd multi-step-react-form

2. **Install dependencies**:

   ```bash
   npm install

3. **Run the application**:

   ```bash
   npm start
   
Open http://localhost:3000 to view it in the browser.

## Folder Structure

```bash
multi-step-react-form/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Step1.js
│   │   ├── Step2.js
│   │   ├── Step3.js
│   │   └── MultiStepForm.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── MultiStepForm.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Usage

- Start filling out the form by entering your personal information in Step 1.
- Proceed to Step 2 to input your address details.
- Finally, review the entered data in Step 3 and submit the form.
- Form data will be validated at each step, and errors will be displayed if required fields are empty or data formats are incorrect.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests for any improvements or bug fixes.

