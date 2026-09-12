# TECH-SAM

## Professional Technology Solutions Web Application

TECH-SAM is a responsive two-page web application developed using React JS. The application presents a professional technology-focused company, introduces its services, and provides visitors with a way to get in touch.

## Project Overview

The purpose of this project is to design and develop a professional, responsive, and user-friendly web application using modern front-end development technologies.

The application consists of two main pages:

* **Home** – Introduces TECH-SAM, provides a company overview, and highlights its services.
* **Contact** – Provides a contact form where users can enter their details and submit a message.

## Features

* Responsive design for desktop, tablet, and mobile devices
* Professional dark and neutral visual design
* Navigation between Home and Contact pages
* Hero section with background imagery
* Company introduction and information section
* Services/features section
* Contact form
* Client-side form validation
* Error messages for invalid form fields
* Successful submission confirmation without refreshing the page
* Reusable React components
* React Router page navigation
* Responsive footer

## Technologies Used

* React JS
* JavaScript
* HTML5
* CSS3
* React Router
* Git
* GitHub

## React Concepts Demonstrated

This project demonstrates the following React concepts:

* Functional components
* JSX
* Props
* `useState`
* `useEffect`
* Form handling
* Component composition
* Reusable components
* React Router

## Project Structure

```text
tech-sam-application/
│
├── public/
│   └── images/
│       └── tech-sam-hero.jpg
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ServiceCard.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   └── Contact.js
│   │
│   ├── images/
│   │   └── tech-sam-logo.png
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
│
├── package.json
├── README.md
└── .gitignore
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/molikoemaqhai-star/tech-sam-application.git
```

### 2. Navigate into the project directory

```bash
cd tech-sam-application
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

## Contact Form Validation

The Contact page includes client-side form validation using React state and JavaScript.

The form validates:

* Full Name
* Email Address
* Phone Number
* Subject
* Message

Users receive appropriate error messages when required information is missing or invalid. When all fields are valid, the application displays a successful submission confirmation without refreshing the page.

## Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

CSS media queries are used to adapt the layout and navigation for smaller screens.

## Git and GitHub

This project is maintained using Git and hosted on GitHub.

**Repository:**
https://github.com/molikoemaqhai-star/tech-sam-application

Meaningful commits are used throughout the development process to document changes and development progress.

## Author

**Tech-SAM Project**

Diploma in Software Engineering and Multimedia
Faculty of Information Communication Technology
