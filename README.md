# Zoo Animal Tracking System
A web page that allows user to keep track of animals at the zoo:

## User stories
* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

## Instructions for setup

* Clone the repository using the `git clone` command.
* Navigate to the top of your local cloned directory and run:
1. $ npm install
2. $ bower install
5. $ bower install bootstrap --save`
3. $ gulp build
4. $ gulp serve
6. In the browser, navigate to *localhost:3000*, unless the previous command opens and focuses a browser window for you.

## Application Structure
Model for export (in `app/animal.model.ts`)

```
export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string, public enteredby: "string") { }
}
```

Model, module and components are as follows:

```
Zoo Animal Tracker Application
└─ Animal model (app/animal.model.ts)
└─ App module (app/app.module.ts)
    └── App component (app/app.component.ts)
        ├── AnimalList component(app/animal-list.component.ts)
        |   └── EditAnimal component (app/edit-animal.component.ts)
        └── NewAnimal component (app/new-animal.component.ts)
```

## Technologies Used
* Angular 2
* Gulp
* Typescript
* Javascript
* HTML
### License
Copyright 2017 Michael Dunlap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
