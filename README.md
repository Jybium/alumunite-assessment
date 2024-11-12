# User Management Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Landing Page](#landing-page)
  - [Add User Form](#add-user-form)
  - [Managing Users](#managing-users)
- [Components Overview](#components-overview)
  - [Reusable Input Component](#reusable-input-component)
  - [User Table](#user-table)
  - [Profile Photo Upload](#profile-photo-upload)
- [Data Management](#data-management)
- [Styling Guidelines](#styling-guidelines)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The User Management Application is a responsive, enterprise-level application built with React and Tailwind CSS for managing user profiles. The app provides administrators with a user-friendly interface to add, update, and view user details. This documentation will guide you through the setup, usage, and structure of the app to ensure easy maintenance, scalability, and development consistency.

---

## Features

- **User List Page**: Displays a list of users with details such as name, email, role, status, and profile photo.
- **Add User Form**: Allows administrators to add a new user, with validation and file type restrictions on profile photos.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Validation**: Built-in form validation (e.g., email format, required fields).
- **Reusable Components**: Includes modular, reusable components like input fields for consistency and efficiency.
- **Mock Data Management**: Uses JSON for mock data, with local storage to manage application state.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Local state management (via React state)
- **Data**: JSON-based mock data (local storage simulation)
- **Validation**: Custom validation within form components

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jybium/alumunite-assessment.git
   cd alumunite-assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

### Running the Application

To start the application locally:

```bash
npm run dev
# or
yarn dev
```

The app will be accessible at [http://localhost:5173](http://localhost:5173).

### Environment Variables

No environment variables are required by default. However, if additional configuration is needed in the future, create a `.env.local` file at the root level.

---

## Usage

### Landing Page

The landing page displays a list of all users, including their:
- Name
- Email
- Role (Admin, User, or Guest)
- Status (Active or Inactive)
- Profile photo (if available)

### Add User Form

The **Add User** form allows admins to create a new user profile. The form includes:
- **Name** (required)
- **Email** (validated for email format)
- **Role** (dropdown with pre-defined options)
- **Status** (toggle for Active/Inactive)
- **Profile Photo** (optional, restricted to specific file types)

### Managing Users

In the current version, user data is simulated through a JSON file. Future implementations may involve RESTful APIs for real-time data management.

---

## Components Overview

### Reusable Input Component

The `Input` component is a customizable, reusable input field that supports:
- **Dynamic Labeling**: Displays labels for fields.
- **Validation**: Shows error messages based on validation rules.
- **Styling**: Consistent appearance with Tailwind CSS.

### User Table

Displays users in a clean, table-like view on the landing page. Future improvements may include pagination, sorting, and search functionality.

### Profile Photo Upload

The **Profile Photo** input accepts file uploads with restrictions on file type. Future iterations may include image preview and resizing.

---

## Data Management

This app uses JSON mock data to simulate user profiles. Local storage is used to persist user data between sessions. When a new user is added, the user list automatically updates to reflect the new data.

---

## Styling Guidelines

This app is styled using **Tailwind CSS**, providing a utility-first approach for responsive design. 

### Tailwind CSS Best Practices

- **Consistent Component Styling**: Ensure consistent styling by applying Tailwind CSS classes in the custom `Input` and other UI components.
- **Responsive Classes**: Use Tailwind's responsive utilities (e.g., `md:`, `lg:`) to ensure that the app functions well on both mobile and desktop.
- **Configurable Theme**: Tailwind’s configuration can be customized for enterprise themes if required.

---

## Code Quality

This app follows best practices for code quality to ensure it remains scalable and maintainable:

- **Component-based Architecture**: The application is structured into modular, reusable components.
- **TypeScript Support**: To prevent runtime errors and improve IDE integration.
- **Custom Hooks**: For any state or logic that needs to be shared across multiple components.
- **Comments and Documentation**: Each component and function is documented to explain its purpose and usage.
- **Linting and Formatting**: Code is linted and formatted for consistency using Prettier and ESLint.

---

## Contributing

We welcome contributions to enhance the app’s functionality and improve code quality. Please follow the steps below:

1. **Fork the repository**.
2. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature description here"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/feature-name
   ```
5. **Open a Pull Request**.

Please follow the guideline when contributing.

---

## Deployment

This application is deployed on vercel and it can be accessed via this link [https://alumunite-assessment.vercel.app/](https://alumunite-assessment.vercel.app).