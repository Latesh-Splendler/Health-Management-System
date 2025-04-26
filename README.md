Health Information System 📋
Hi there!
This is my submission for the Software Engineering Intern Task — a basic health information system that helps doctors manage clients and their health programs.

The project has two parts:

A frontend built with React + Vite.

A backend built with Node.js, Express, and SQLite.

I designed it to be simple, clean, and easy to expand later.

🔥 Tech Stack
Frontend: React + Vite

Backend: Node.js + Express

Database: SQLite

✨ Features
Doctors can create health programs (like TB, Malaria, HIV).

Register new clients.

Enroll clients into multiple programs.

Search and view client profiles.

Expose client profiles via an API for external systems.

🖥️ Frontend — React + Vite
The frontend is built using React and bootstrapped with Vite for super fast development.

Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend server:

bash
Copy
Edit
npm run dev
Frontend will be available at http://localhost:5173.

I used minimal external libraries to keep it lightweight and easy to understand.

🛠 Backend — Node.js + Express + SQLite
The backend exposes REST APIs that handle programs, clients, and enrollments.

Setup
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Install backend dependencies:

bash
Copy
Edit
npm install
Setup the database:

bash
Copy
Edit
node setup.js
This will create a health_system.db file locally with all necessary tables.

Start the server:

bash
Copy
Edit
node app.js
Backend server will run at http://localhost:5000.

📡 API Overview
Here’s a quick list of the available APIs:


Method	Endpoint	Description
POST	/clients	Register a new client
GET	/clients	List all clients
GET	/clients/:id	Get client profile
POST	/programs	Create a new program
GET	/programs	List all health programs
POST	/enrollments	Enroll a client into a program
GET	/enrollments	List all enrollments
The frontend consumes these APIs to display client and program information.

🔗 Connecting Frontend and Backend
I used axios to make API calls from the frontend to the backend.

Example:

javascript
Copy
Edit
import axios from 'axios';

const getClients = async () => {
  const response = await axios.get('http://localhost:5000/clients');
  console.log(response.data);
};
Make sure the backend is running before you start interacting with the frontend.



🧹 Notes
I wrote clean, modular code to make it easy to maintain.

The database connection is simple but can be easily replaced with something bigger like PostgreSQL if needed.

I kept my commits small and meaningful.

📖 License
This project is open-source and free to use.

🙌 Thank You!
Thanks for reviewing my project! I'm really excited about the opportunity and look forward to learning and growing even more.
Feel free to check the code and leave any feedback — I'd love to hear your thoughts!


