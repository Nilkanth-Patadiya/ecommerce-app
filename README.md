<h1 align="center">NilkanthMart | E-Commerce App</h1>

<div align="center">

![GitHub License](https://img.shields.io/github/license/Nilkanth-Patadiya/ecommerce-app?color=blue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nilkanth-Patadiya/ecommerce-app?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/Nilkanth-Patadiya/ecommerce-app?logo=typescript)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Nilkanth-Patadiya/ecommerce-app/main)
![GitHub Repo stars](https://img.shields.io/github/stars/Nilkanth-Patadiya/ecommerce-app)

</div>

## 📝 Table of Contents

- [About](#about)
- [Screenshots](#screenshots)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
Here is a summary of the NilkanthMart e-commerce web application:
- **User Roles**: The app supports two login roles: **Customer** and **Admin**.
- **Customer Features**: Customers can browse products, add items to the cart, adjust quantities, remove products, apply coupon codes, place orders, and view order history.
- **Admin Dashboard**: Admins can view statistics like total items purchased, total amount, discount amounts, and a list of used discount codes.
- **Customer Management**: Admins can set discount frequencies, allowing every nth order from a customer to receive a 10% discount coupon (n can be set from 0 to 20).

## 🖼️ Screenshots <a name = "screenshots"></a>
<details>
  <summary>Click To Show Screenshots</summary>

  ### Login
![Screenshot 2024-10-09 184757](https://github.com/user-attachments/assets/b3d83d53-47c2-4ccf-901d-9f6f0e443b62)

  ### Products
![Screenshot 2024-10-09 183909](https://github.com/user-attachments/assets/3513ad76-ba9e-49a3-be18-34adb9126009)

  ### Shopping Cart - Empty 
![Screenshot 2024-10-09 185013](https://github.com/user-attachments/assets/f6106d96-b571-4eae-b8ad-8662348a6573)

  ### Shopping Cart - Products Added
![Screenshot 2024-10-09 185240](https://github.com/user-attachments/assets/93f5b9ec-5a25-4f50-897e-9d27d8a5d416)

 ### Shopping Cart - Order Placed
![Screenshot 2024-10-09 185247](https://github.com/user-attachments/assets/6684ff09-a436-4d54-999e-336a6ac682ca)

 ### Orders
![Screenshot 2024-10-09 185001](https://github.com/user-attachments/assets/1107d31f-8f0e-4229-90f1-170065806b94)

 ### Admin Dashboard
![Screenshot 2024-10-09 185901](https://github.com/user-attachments/assets/405516c1-5f4c-4413-90be-ccd19d521aeb)
 
 ### Customers - View
![Screenshot 2024-10-09 185918](https://github.com/user-attachments/assets/15840ad5-3208-4650-b2dc-443906657bbe)

 ### Customers - Edit Discount Frequency
![Screenshot 2024-10-09 185946](https://github.com/user-attachments/assets/ab537018-582d-4916-9fe3-feec548290e4)

</details>

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites** :

Make sure you have installed all of the following prerequisites on your machine:

- Git - [Download & Install Git](https://git-scm.com/downloads), OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) with the npm package manager.

### **Starting Dev Server** :

1. Download or clone the code from this repository. If you download as a zip file, be sure to unzip it.

2. Navigate to the ecommerce-app folder, there should be a package.json file in this folder.

3. In a command window (or the Command prompt in VS Code), type below command.

   ```
   npm install
   ```

   This creates a **node_modules** folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.

4. In the same command window (or the Command prompt in VS Code), type

   ```
   npm run dev
   ```

   The application should then run successfully.

5. Open **http://localhost:3000** to view it in the browser.

6. Use below login credentials
  
     | Email | Password |
     |--------------|-------|
     | customer@example.com | customer123 |
     | admin@example.com | admin123 |

## ⛏️ Built Using <a name = "built_using"></a>

- [Next.js](https://nextjs.org/docs) - React framework for building full-stack web applications.
- [React](https://react.dev/) - User Interface (UI) library
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language
- [Material UI](https://mui.com/material-ui/) - React UI component library
- [Material Icons](https://mui.com/material-ui/material-icons/) - Icons library
- [Redux Toolkit](https://redux-toolkit.js.org/) - A powerful and efficient library that simplifies managing the state in React applications using Redux.
- [Redux Persist](https://www.npmjs.com/package/redux-persist) -  A library for persisting Redux state to storage, such as the browser’s local storage.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A lightweight testing utility for React applications that focuses on testing components from a user’s perspective

## ✍️ Authors <a name = "authors"></a>

- [@Nilkanth-Patadiya](https://github.com/Nilkanth-Patadiya) - Idea & Implementation
