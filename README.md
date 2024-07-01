## Installation and Running of React-challenge

1. Clone the project repository: ```https://github.com/LuizHGodoy/react-challenge```

```sh
git clone https://github.com/LuizHGodoy/react-challenge
```

2. Navigate to the project directory:

```sh
cd react-challenge
```

3. Install the dependencies:

```sh
npm install
```

4. Run the project:

```sh
npm run dev
```

5. The project will be running on ```http://localhost:5173```
![image](https://github.com/LuizHGodoy/react-challenge/assets/40682386/9d41233d-0255-438a-82c5-7d2e2465f4f0)
   ![image](https://github.com/LuizHGodoy/react-challenge/assets/40682386/92535c51-d891-4772-9bbb-82d93e8fdb70)
   ![image](https://github.com/LuizHGodoy/react-challenge/assets/40682386/751b94de-6f64-4e0a-96d8-cd11a731f9e9)




7. The project is using Biome.js as a linter (https://biomejs.dev/) make sure to install it on your editor

8. To run the cypress tests (make sure the project is running on ```http://localhost:5173```):

```sh
npx cypress open
```
![image](https://github.com/LuizHGodoy/react-challenge/assets/40682386/dad05d0b-7130-4cf1-b792-31c9db20678d)

![image](https://github.com/LuizHGodoy/react-challenge/assets/40682386/e70a474d-c988-4f43-a1e4-a4ee2b87e7d9)

9. To run the docker build just run
```sh
docker compose up --build
```
or 
```sh
sudo docker compose up --build
```
