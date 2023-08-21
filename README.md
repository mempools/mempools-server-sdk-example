## Running the Node.js Server Application
This guide will walk you through the steps to clone the repository of the Node.js server application and run it locally.

### Prerequisites
- Node.js: Make sure you have Node.js installed on your system. You can download and install it from the official Node.js website.
- Git: You'll need Git installed to clone the repository. You can download and install Git from the official Git website.

#### Step 1: Clone the Repository
Open a terminal or command prompt on your computer.

Navigate to the directory where you want to clone the repository.

Run the following command to clone the repository:

bash
Copy code
git clone REPOSITORY_URL

#### Step 2: Set Up Environment Variables
After cloning the repository, navigate to the repository's root directory.

Create a file named .env in the root directory if it doesn't already exist.

Open the .env file and add the following environment variables:

env
```
PORT=3333
CLIENT_TOKEN=your-client-token
API_URL=mempools-api-url
````

- Replace your-client-token with your actual Mempools API client token.
- Replace mempools-api-url with your actual Mempools API url.

#### Step 3: Install Dependencies
In the terminal, navigate to the repository's root directory (the one containing app.ts and server.ts).

Run the following command to install the application's dependencies:

```
npm install
```

Step 4: Run the Server
After installing the dependencies, run the following command to start the server:

```
npm run dev
```
The server will start and listen on the specified port (default: 3333).

Open a web browser and navigate to http://localhost:3333/healthz. You should see a JSON response indicating that the Mempools API is available.

Congratulations! You have successfully cloned the repository and run the Node.js server application locally.