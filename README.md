# Minimal React
> My personal setup for developing web applications based on React

This project started off with me wanting to learn how the setup with create-react-app 
(which is in my opinion the best library to start quickly with React) grossly works 
behind the scenes.

In general I would suggest to anybody (not only because this project is a long way from
being perfect): just use create-react-app. That thing is taking a lot off your shoulders 
for the beginning but if you care about how things work behind the scenes, try setting up 
your project from scratch.


## Installing / Getting started

In case you want to use this template anyways for your project, it is not hard to do. Just 
clone it and do what you would normally do in your node projects:

```shell
git clone https://github.com/fkresler/minimalreact.git <your-project-name>
cd <your-project-name>/
npm install
```

Remember that you can run a project with a ready build directory with just the normal
dependencies which happens if you install your dependencies with NODE_ENV=production.
But for the actual build process both the dependencies and the devDependencies are required
which happens if you have NODE_ENV=development (the default) set.

Afterwards you can make your own project repository:

```shell
rm -rf .git
git init
```

And at last you can answer those questions and now freely use your new git repository!


## Checking & Building & Running

To run ESLint for your project you can run the following command:

```shell
npm run lint
```

Also to run your tests automatically (featuring code coverage) you can use the following command:

```shell
npm run test
```

For the build step you can use the existing npm run commands (to run this step successful you 
currently need the devDependencies):

```shell
npm run build
```

In order to start up the application in development mode (requires all dependencies):

```shell
npm run start
```

And in order to start up the application in production mode (requires a finished build and only 
production dependencies):

```shell
npm run start:prod
```


## Features

What is actually included?
* React
* Checking your props with Prop-Types
* Styling in React with styled-components
* Linting your Javascript code with ESLint (and using the presets of non other than airbnb)
* Testing with jest
* Code coverage reports created by jest
* Babel as a tanspiling tool to make your new and fancy Javascript code work
* Providing a base setup for your node server in production based on express
* Storybook to describe your components in a visual way


## Contributing

If you'd like to contribute or give any sort of feedback, please fork the repository and use 
a feature branch. Pull requests and also your feedback are greatly welcome.


## Licensing

The code in this project is licensed under MIT license.
