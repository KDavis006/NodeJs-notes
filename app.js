// Kyle Davis, Brianne simeson, Ren Levingar, Andrew Silahi

// 33: Open JS Foundation
// Node.js Foundation and the JS Foundation merged to form the OpenJS Foundation. The OpenJS Foundation is made up of 32 open source JavaScript projects including Appium, Dojo, jQuery, Node.js, and webpack. Their mission is to support the healthy growth of JavaScript and web technologies by providing a neutral organization to host and sustain projects, as well as collaboratively fund activities that benefit the ecosystem as a whole.

// you can find the OpenJS Foundation at: https://openjsf.org/
// On this website you can find amny different packages for different package managers, certifications for node.js and several other packages, and find communtities to help you learn and grow your coding knowledge. They also help thbe community and provide valuable informationon what is happening in the coding world through their blogs.



// 34: Open-Source
// Open source software is software with source code that anyone can inspect, modify, and enhance. If a program is open-source, its source code is freely available to its users. Its users - and anyone else - have the ability to take this source code, modify it, and distribute their own versions of the program. The users also have the ability to distribute as many copies of the original program as preferred. Anyone can use the program for any purpose; there are no licensing fees or other restrictions on the software.

// open-source code is usually in either the views folder or the public folder
// anything in these folders is able to be accessed by the public through the inspection window but the changes are temporary and local but they can download it and use it for their own
// other examples of open source is people uploading open source code for anyone to use and be able to download and minipulate. These can be different packages, libraries, and also just code snippets.
// /public or /views

// #35: Package
// A software package is multiple applications or code modules that work together to meet various goals and objectives. A package in Node.js contains all the files you need for a module. Modules are JavaScript libraries you can include in your project.

// there are several packages open source that you can download and use
// The node package has a huge folder of all the files you need and different libraries you will be using in your program.
// packages are very useful for saving time and preformance because they have been made by professionals and are constantly being updated and you dont have to waste a ton of time creating all of the different modules that come with the packages yourself


// #36: package.json
// A package.json file lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rule, and makes your build reproducible, and therefore easier to share with other developers.

// The package.json is an open-source package that holds different information on your website this allows people to view what dependencies you used and who worked on it
// package.json is where you hold all of your dependencies and other information on your project. When you install a dependency it wil load into your package.json with the name and version type of the dependency. There is also the author and contributors section to list off who worked on it.



// packages, stderr, res and req, promise, routes, querying


const people = require('/models/user')
const tools = require('/models/tools')

app.use('/public', people)
app.use('/views', tools)



// Importing a package using Yarn
const somePackage = require('some-package');

// Using the imported package
somePackage.someFunction();

// Installing a new package using Yarn
// Open your terminal and navigate to your project directory, then run:
// yarn add new-package

// Removing a package using Yarn
// yarn remove package-name

// Updating all dependencies to their latest versions
// yarn upgrade

// Running a script defined in your package.json
// For example, if you have a script named "start" in your package.json
// yarn start

// Running Yarn commands from the terminal
// To install dependencies defined in your package.json
// yarn install

// To install a specific package as a development dependency
// yarn add --dev package-name

// To install a specific package globally
// yarn global add package-name

// To check for outdated packages
// yarn outdated

// To list all installed packages and their versions
// yarn list

// To see detailed information about a specific package
// yarn info package-name

// To check for security vulnerabilities
// yarn audit

// For more Yarn commands and options, refer to the official Yarn documentation: https://classic.yarnpkg.com/en/docs/













// PORT

// Set the PORT variable
const PORT = process.env.PORT || 3000; // Use the provided environment variable or default to 3000

// Example usage with an HTTP server
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified PORT
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









// PROCESS

// Recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Input number
  const number = 5;
  
  // Calculate and display the factorial
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  








// PROMISE

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, e.g., fetching data from a server
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('Data successfully fetched');
      } else {
        reject('Error: Failed to fetch data');
      }
    }, 2000); // Simulate a 2-second delay
  });
  
  // Using the Promise
  myPromise
    .then((result) => {
      console.log(result); // This will run if the Promise is resolved
    })
    .catch((error) => {
      console.error(error); // This will run if the Promise is rejected
    });
  
  // You can also use the .finally() method to execute code regardless of whether the Promise is resolved or rejected.
  myPromise.finally(() => {
    console.log('Promise has completed, regardless of success or failure.');
  });

  // Query
let element = document.getElementById('myHeader');
// Query typically refers to getting one elemnt from from a documentusing the DOM. This query selects the element "myHeader" from the DOM.



// Request and Response
const readPeople = async(req,res)=>{ 
    try {
        let people = await People.find({}); // This is the request
        res.json(people); // This is the response
    } catch (error) {
        console.log(error)
    }
}
// Request refers to retreieving data or interacting with an API. The code segment above shows that the request is getting the people data from whichever source is linked.
// Response refers to a server or API returing information when a request is given. The code segment above shows that the information coming back will be put through a "res.json" function to display it in a json format.



// REPL (Read-Eval-Print Loop)
const axios = require('axios')

const getFoods = async () => {
  try {
    return await axios.get('https://foods/all')
  } catch (error) {
    console.error(error)
  }
}
// REPL refers to what is able to run various different function from different JS sources, in this example axios is being used. The code segment shows an axios get function, then REPL reads the code, evalutes the code, and prints the code.

//Scope is the set of variables that's visible to a part of the program.
//In this example, the variable a, declared outside of any function or conditional, has a global scope, so it can be console.log'd from inside or outside of the function test. However, b is a variable local to the test function, because that's where it's declared, so it can be used inside the function, but if we console.log it outside of that function, it errors.
//Local scope variables are useful because they don't need to exist outside of their bubble, so they can be deleted and therefore take up less space in the program.

//Runtime is a general term that refers to any library, framework, or platform that your code runs on. It describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code. Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.
//In the below example, we get a runtime error from the second 'console.log(b)'. This error occurs while the program is running on VScode or whatever platform it's run on, so it's called a runtime error.
//If we never run our code, it won't do anything, so runtime is very important. It's also useful because it includes necessary instructions for the execution of our code, so we don't have to write them ourselves every time.

//Stderr, also known as standard error, is the default file descriptor where a process can write error messages. It's an output stream typically used by programs to output error messages or diagnostics.
//In VS Code, the stderr is the output section, which can be brought up with Shift+Ctrl+U. When you run code in VS Code, any error messages are outputted there. When you run the below example, the runtime error generated by the second 'console.log(b)' will be sent to the stderr.
//This is useful because it's important to have somewhere for our errors to go, so we can read them, troubleshoot, and fix our program.

try {
    let a = 15;
    let test = function() {
        let b = 7;
        console.log(a);
        console.log(b);
    }
    test();
    console.log(a);
    console.log(b);
} catch(err) {
    console.log(err);
}

//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.
//When this program receives a request from the client that matches the below route, using the path "/test" and the GET request method, it executes the nameless handler function and responds by sending the string "Success."
//This is useful on servers, because it makes routes that clients can take to access particular webpages or data. Without routing, there'd be very little clients could access on servers.
const express = require("express");
const app = express();
app.get("/test", (req, res) => {
    res.send("Success");
})
