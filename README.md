# JSON Field Builder – Dynamic Nested Field UI in React

This project allows users to dynamically create a JSON structure via a user interface where they can define keys, select data types, and nest fields as needed.  
It's a perfect starting point for form builders, JSON schema generators, or config editors.

---

## 🚀 Live Demo


[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=netlify)](https://json-schema-builder-webapp.netlify.app/)


## Features

- Add/Edit/Delete keys
- Select type: string, number, boolean, or nested
- Recursively nest fields
- Automatically updates the entire JSON structure in real-time

---

## Tech Stack Used

| Tech                 | Why It's Used                                                                 |
|----------------------|--------------------------------------------------------------------------------|
| React JS            | Core library to build dynamic UI using components and state                    |
| JavaScript (ES6+)   | For all logic, event handling, and dynamic rendering                           |
| JSX                 | Cleaner way to write UI in JavaScript (React’s syntax)                         |
| Props and State     | To pass and manage data across parent-child components                         |
| Recursive Rendering | Used for handling infinite nested JSON fields                                  |
| Inline CSS          | Basic styling and indentation for nested levels                                |


---

## File Structure
```
📁 json-field-builder/
│
├── 📁 public/
│   └── index.html                # Main HTML file loaded by CRA
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── JsonField.jsx         # Component for building and managing dynamic/nested fields
│   │   └── JsonPreview.jsx       # Component to preview the resulting JSON structure
│   │
│   ├── 📁 styles/
│   │   ├── index.css             # Global styles (optional: Tailwind/base CSS)
│   │   ├── JsonField.css         # Styles specific to JsonField component
│   │   └── JsonPreview.css       # Styles specific to JsonPreview component
│   │
│   ├── App.jsx                   # Main app component combining form builder and preview
│   └── index.js                  # React entry point (calls App)
│
├── .gitignore
├── package.json                 # Lists dependencies and scripts
├── README.md                    # Project overview and usage instructions
└── package-lock.json            # Lock file for dependency consistency

```
---

## How It Works

1. Key Input  
   User enters a key for each field (like a JSON property name).

2. Type Selector  
   User selects the type of the value: string, number, boolean, or nested.

3. Nested Handling  
   If user selects nested, an array of children fields becomes available — you can add, delete, and modify them recursively.

4. Change Propagation  
   All changes flow back to the root JSON structure via onChange and onDelete handlers using the current path.

5. Dynamic Indentation  
   Each level of nesting adds left-margin to visually represent hierarchy.

---

## How to Run

```bash
# Clone the repo
git clone <your-repo-url>

# Move into the project directory
cd your-project

# Install dependencies
npm install

# Start the development server
npm start
