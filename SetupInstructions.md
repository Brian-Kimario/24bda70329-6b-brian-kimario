🚀 Project Setup
Step 1: Install Dependencies
Open the terminal in VSCode and run:

pnpm add express cors
pnpm add -D nodemon
Step 2: Update package.json
Open package.json and add "type": "module" along with the following scripts:

{
"type": "module",
"scripts": {
"start": "node index.js",

    "dev": "nodemon index.js"

}
}
Step 3: Create .gitignore
Create a .gitignore file and copy-paste the content from here.

Step 4: Download Postman
Download and install Postman to test your API endpoints.
