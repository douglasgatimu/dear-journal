
<h1 align="center">
  
  <br>
  Journal
  <br>
</h1>

<h4 align="center"> Welcome to Journal App, where your memories live.</h4>



## Overview
Code Challenge 2 of Phase 2 Solution: A simple journal entry application built with React that allows users to create, view, mark as important, and delete journal entries. The app communicates with a mock API to simulate data fetching, creation, and deletion of entries.

## Key Features

The application satisfies the following **user stories**:

### 1. View All Journal Entries on Start
-    When the app starts, it fetches and displays a list of existing journal entries from the API.


### 2. Create New Entry
-  Users can toggle the visibility of a form and submit a new journal entry with a title and body. This is sent via a `POST` request to the API.


### 3. Mark Important
- Users can locally mark journal entries as important. This action is reflected in the UI but does not send an API call.


### 4. Loading & Submission States
- Visual feedback is provided while data is loading or being submitted.


### 5. Delete Entry
- Users can delete entries. A `DELETE` request is sent to the API and the UI updates immediately.

---

## How To Use

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Moringa-SDF-PT10/journal-douglas-gatimu

# Go into the repository
$ cd journal-douglas-gatimu

# Install dependencies
$ npm install

# Run the dev server
$ npm run dev
```

## File Structure

```
journal-douglas-gatimu/
├── public/
├── src/
|   ├── assets
│   ├── App.css
│   ├── App.jsx
|   ├── index.css
│   ├── Entry.jsx
│   ├── Entries.jsx
|   ├── NewEntry.jsx
│   └── main.jsx
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

---



## Tech Stack

This software uses the following packages:

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) (Mock REST API)

## 👨‍💻 Author

**Douglas Gatimu**
[GitHub](https://github.com/douglasgatimu)

## License
This project is for educational use only.

---


