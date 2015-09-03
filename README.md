Participation Community Dashboard
=====

This project is a Mozilla Community Dashboard to gather the most important statistics about certain countries from [mozillians.org](https://mozillians.org).

You can find the initial spec here: [participation-org/issues/133](https://github.com/mozilla/participation-org/issues/133).

# Contributing

We will use this repo's issues to track the work. Feel free to jump in.

## Getting set up

It's as easy as forking this repository, change the necessary files and create a Pull Request.

For the import, you will need a mozillians.org API key though. You can get it easily on your mozillians.org profile page:

* Log in to mozillians.org
* Go to your "Edit your profile"
* At the bottom you see "Developer"
* Click on "Manage API keys"
* Register a new app

### Setting up the project on your local environment

1. Install [Node](http://nodejs.org)

2. Install [MongoDB](http://docs.mongodb.org/manual/installation/)

3. Inside the project folder run the following command to install the Grunt and Bower CLIs

        sudo npm install -g grunt-cli bower

4. Finally, install the project dependencies and libraries with the following commands:

        npm install
        bower install

### Starting the API import

For now, we will pass in the API key you created by hand, to make sure that this will never be checked into this repository.

    node api/import.js YOURKEY

### Running the project locally in development mode

To run the server in development mode, simply type:

    grunt serve
