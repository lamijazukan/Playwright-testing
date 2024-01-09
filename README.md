# Playwright Testing for [BookMyShow](https://in.bookmyshow.com/) website

This repository contains automated tests for the BookMyShow website using the Playwright framework and follows the Page Object Model (POM) design pattern. The tests include two smoke tests and three regression tests to ensure proper functionality of specific elements on this website.

**Note:** This project has been developed for educational purposes as part of university coursework to showcase various aspects of software testing.
## Project Structure
The project follows the Page Object Model (POM). The main page class is defined in the PageClass.ts file, and all other pages extend the Page class to utilize the page object and method that navigate to website. Locators, for locating specifis elements, are defined in separate files and imported within its corresponding page. 
There are three main pages:

- HomePage.ts
- LoginPage.ts
- DetailedPage.ts

All pages define methods for test steps specific for that page. Then this methods are called inside smokeTest and regressionTest files.

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)


## Installation

Prerequisites:
NodeJS 16(or above)

- Clone the repository using the below URL

 https://github.com/lamijazukan/Playwright-testing.git

- Navigate to the directory
```bash
cd playwright-testing
```

- And install npm packages using:
```bash
npm install
```

- Install Playwright
```bash
npm init playwright@latest
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command
```bash
npx playwright test
```
- npx playwright test
```bash
npx playwright test tests/{specfile_name.ts}
```

## Contributors
<a href="https://github.com/Sadzida02">
  <img src="https://avatars.githubusercontent.com/u/99671299?v=4" width="50" alt="Sadžida">
</a>

<a href="https://github.com/LejlaSinanovic">
  <img src="https://avatars.githubusercontent.com/u/154996508?v=4" width="50" alt="Lejla">
</a>

<a href="https://github.com/DeFactin">
  <img src="https://avatars.githubusercontent.com/u/133485223?v=4" width="50" alt="Amina">
</a>

<a href="https://github.com/LamijaVeladzic">
  <img src="https://avatars.githubusercontent.com/u/133516093?v=4" width="50" alt="Lamija">
</a>





