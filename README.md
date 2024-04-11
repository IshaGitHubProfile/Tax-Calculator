# Tax Calculator 

### Overview:

This Tax Calculator web application enables users to compute their taxes based on their income, deductions, and age. It implements a specific tax calculation algorithm that considers the user's age bracket and income level. Additionally, the application provides error handling for incorrect inputs and displays results in a modal window.

### Live Site - https://tax-calculator-chi-seven.vercel.app/

### Screenshots
![Screenshot (130)](https://github.com/IshaGitHubProfile/Tax-Calculator/assets/143515190/892d5bfc-2628-41ab-b6d3-3eb38ced932e)
![Screenshot (132)](https://github.com/IshaGitHubProfile/Tax-Calculator/assets/143515190/48b96e1e-0a74-43e9-aa56-6bee3347b307)
![Screenshot (131)](https://github.com/IshaGitHubProfile/Tax-Calculator/assets/143515190/5ebb8171-48fc-446e-a85f-52118045dabd)
![Screenshot (133)](https://github.com/IshaGitHubProfile/Tax-Calculator/assets/143515190/6c17c41b-f405-4e8d-adf4-9b7df83865c5)
![Screenshot (134)](https://github.com/IshaGitHubProfile/Tax-Calculator/assets/143515190/d34fa06b-d892-425a-b2bc-c479cead7ee2)


### Features:

Tax calculation based on income and age.
Error handling for incorrect inputs with error icons and tooltips.
Displaying results in a modal window.
Support for three age categories in the dropdown field.

### Usage:

Enter your gross annual income, extra income, and deductions in the corresponding input fields.
Select your age range from the dropdown menu.
Click on the "Calculate Tax" button to view the computed tax amount.
If any errors are present in the input fields, error icons will appear next to them. Hover over the error icons to view the error messages in tooltips.
If the age field is left blank when submitting, an error icon will be displayed, indicating that the input is mandatory.

### Tax Calculation Formula:

If the overall income (after deductions) is under 8 Lakhs, no tax is applied.
For incomes exceeding 8 Lakhs, the portion over 8 Lakhs is taxed at different rates based on the user's age:
30% for ages under 40
40% for ages between 40 and 60
10% for ages 60 and above

### Technical Details:

The frontend is developed using HTML, CSS, and JavaScript.
JavaScript is responsible for implementing the tax calculation logic and error handling.
CSS is utilized for styling, including the design of error icons and tooltips.

### Setup:

Clone the repository to your local machine.
Open the index.html file in a web browser.
Enter the required information and click on the "Calculate Tax" button.
Review the tax calculation results displayed in the modal window.

Contributing:
Contributions are welcome. If you wish to contribute, please fork the repository and submit a pull request with your modifications.





