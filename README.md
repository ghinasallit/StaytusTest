# planets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Run project

1- download project 

2- npm install

3- ng serve

4- open this link http://localhost:4200 on browser 

## project && APIs

- project work with dynamic data , you can add more collection of questions in "assets/database/collections.json" to show more questions in new step.
- To add new collection go to "assets/database/collections.json" and add below object.

 {
    "collectionID": 9,
    "questions": [
      {
        "id": 100,
        "text": "What industries would you prefer to work in?",
        "options": [
          {
            "id": 21,
            "text": "Construction",
            "icon": "Construction.png"
          },{
            "id": 22,
            "text": "Hospitality",
            "icon": "Hospitality.png"
          },{
            "id": 23,
            "text": "Real estate",
            "icon": "Real estate.png"
          },{
            "id": 24,
            "text": "Tourism",
            "icon": "Tourism.png"
          },{
            "id": 25,
            "text": "Manufacturing",
            "icon": "Manufacturing.png"
          }
        ]
      }
    ]
  },

now will apeear new step have above questions.




