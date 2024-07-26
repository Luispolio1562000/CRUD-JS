import { UsersApp } from "./src/users/users-app";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;

const element = document.querySelector('.card');


UsersApp(element);