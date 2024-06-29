
# React-Apollo-Client Application Documentation

## Overview
This documentation provides an overview of the React Apollo Client application, describing its main components and instructions on how to run it. Note that a fake API is used, and posts are copied to the local state. The application fetches a limited number of posts, and while pagination and Redux Toolkit for state management would be ideal, a simpler approach is used due to the app's small size. Tests have not been added as they were not specified in the terms of reference.

## Prerequisites
1. **To get started with the application, clone the repository from GitHub**

Open a terminal or command prompt
Clone the repository:
```sh
git clone https://github.com/d-chumeiko/react-apollo-client
```

2. **Before running the application, ensure that Node.js 16+ version and npm (Node Package Manager) are installed on your machine.**

## Running the Application

1. **Install Dependencies**
   Navigate to the project directory and install the dependencies:
   ```sh
   npm install
   ```

2. **Start the Application**
   To start the application, use the following command:
   ```sh
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. **Build the Application**
   To build the application for production, use the following command:
   ```sh
   npm run build
   ```
   The build artifacts will be stored in the `build` directory.

4. **Eject the Application**
   If you need to customize the configuration, you can eject the application by running:
   ```sh
   npm run eject
   ```
   **Note:** This is a one-way operation. Once you eject, you can't go back!

## Project Structure
Here is an overview of the project structure:

```
react-apollo-client
├── src
│   ├── api
│   │   ├── apolloClient.ts
│   │   ├── index.ts
│   │   └── queries.ts
│   ├── components
│   │   ├── Error
│   │   │   ├── Error.module.scss
│   │   │   ├── Error.tsx
│   │   │   └── index.ts
│   │   ├── Loading
│   │   │   ├── index.ts
│   │   │   ├── Loading.module.scss
│   │   │   └── Loading.tsx
│   │   ├── Post
│   │   │   ├── Body.tsx
│   │   │   ├── EditableInput.tsx
│   │   │   ├── EditableTextarea.tsx
│   │   │   ├── index.ts
│   │   │   ├── Post.module.scss
│   │   │   ├── PostComponent.tsx
│   │   │   └── Title.tsx
│   │   └── index.ts
│   ├── containers
│   │   ├── index.ts
│   │   ├── PostContainer.tsx
│   │   └── PostListContainer.tsx
│   ├── hooks
│   │   ├── index.ts
│   │   ├── usePostFields.ts
│   │   └── useUnsavedChanges.ts
│   ├── types
│   │   ├── index.ts
│   │   ├── postTypes.ts
│   │   └── validationTypes.ts
│   ├── utils
│   │   └── validation.ts
│   ├── .env
│   ├── App.scss
│   ├── App.tsx
│   ├── constants.ts
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

### Main Components

1. **API**
   - `apolloClient.ts`: Sets up the Apollo Client for GraphQL requests.
   - `index.ts`: API index file.
   - `queries.ts`: Contains GraphQL queries used in the application.

2. **Components**
   - `Error`: Handles error display.
     - `Error.module.scss`: Styles for the error component.
     - `Error.tsx`: Error component implementation.
   - `Loading`: Displays a loading indicator.
     - `Loading.module.scss`: Styles for the loading component.
     - `Loading.tsx`: Loading component implementation.
   - `Post`: Manages post display and editing.
     - `Body.tsx`: Post body component.
     - `EditableInput.tsx`: Editable input field for posts.
     - `EditableTextarea.tsx`: Editable textarea for posts.
     - `Post.module.scss`: Styles for the post component.
     - `PostComponent.tsx`: Main post component.
     - `Title.tsx`: Post title component.

3. **Containers**
   - `PostContainer.tsx`: Container for individual post.
   - `PostListContainer.tsx`: Container for the list of posts.

4. **Hooks**
   - `usePostFields.ts`: Custom hook for managing post fields.
   - `useUnsavedChanges.ts`: Custom hook for handling unsaved changes.

5. **Types**
   - `postTypes.ts`: Types for post data.
   - `validationTypes.ts`: Types for validation.

6. **Utils**
   - `validation.ts`: Utility functions for validation.

### Environment Variables
- `.env`: Contains environment variables.

### Styles
- `App.scss`: Global styles for the application.

### Main Application Files
- `App.tsx`: Main application component.
- `index.tsx`: Entry point for the React application.
- `constants.ts`: Contains application constants.

### Tests
- `setupTests.ts`: Configuration for setting up tests.


## Additional Information
- **State Management:** While the application uses a simpler state management approach, ideally Redux Toolkit should be used for better scalability.
- **Pagination:** Currently, there is a limit on the number of posts fetched. Pagination should be implemented for better data handling.
- **Testing:** Tests should be added to ensure the reliability of the application. Although not included, they are recommended for production-ready applications.

For further details, refer to the `README.md` file included in the project.
