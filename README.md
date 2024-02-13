
  # Hello, please follow these steps to run the project.
  Project contains two parts:
  1. Backend
  2. Frontend

  Backend part is using the latest Laravel version `10.x`
  Frontend part is using the latest React version `18.2.0`
  
  Make sure that your machine is using all requirements to run latest Laravel and React applications.

  However this project Backend is prepared to run in a docker environment.

  Feel free to use docker build that is provided.

  Steps to run a project:
  ```
  1. Clone the project on your machine, in the desired folder:
  "git clone git@github.com:akotikovs-personal/discovery-cars-evaluation.git <destination>"
  2. Go to the "my-laravel-app" folder and run from there the following command, to run the Laravel:
  "docker-compose up --build"
  3. Start another terminal session, and go to the "my-react-app", and run the following commands to install dependencies and start the React application:
  > "yarn" or "npm install"
  > "yarn start" or "npm run start"
  3. Enjoy the application
  ```
  ---
  Overall about the project:
  
  1. Application is using this api, to gather information about available cars for rent `https://booking-test.dev-dch.com/swagger/index.html`
  2. App allows to search the available cars in the specific location.
  3. Available locations - `Portugal`, `USA`, `Australia`
  4. The search is based on the country, though the API is providing the cities as well, but for sake of the complexity, is implemented only search by country ;))
  5. Once available cars are displayed under the search, you can chose whatever car you like, and proceed to the details page, there you will see the same info as on details card on the homepage, however from product details page is possibility to proceed with booking.
  6. Once you are on the checkout, proceed with personal information form. 
  7. After form is filled with a necessary information, than can proceed with booking.
  8. After successfull booking you will see, the success popup, with nice message. 
  9. From the popup, you can return to the homepage, or stay on the checkout page, and book the same car again ;))

  Basically that's it.

  If you have any questions, feel free to reach me out, gladly will try to help.

  Thank you
