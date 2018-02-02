Lesson 2 - Handling Requests and Persistance
---
This lesson hopes to describe a strategy for handling requests; the basics of async and why its awesome for web stuff; and persistance and a simple strategy for it.

### Goals:
* How to handle requests?
* What is Async?
* What is Persistance?
* FS module NodeJS.
---
### How to handle requests?
So in the last lesson we wrote a simple server that could handle all requests and it always sent back a simple string. For this lesson we are going to discuss one of the primary way requests are handled. 
When requests come in they have some data associated with them, the most useful are URL and METHOD. This is because they can be accessed easily and are always gaurenteed to exist. There are other pieces of data with a request, but they are either not as reliable or optional, _like the request body._ 

#### URL
The URL of a request can be thought of as a path. It is useful to break up different resources your app may have by the URL. Meaning something that has to do with _schools_ should be at `/school`, and something that is relating to students should be at `/student`. Paths are great for talking about what type of data or what resource we are working with. If we wanted to talk about students in a school we could have a URL that looked somthing like `/school/students`. These are often called routes, because they are generally used for routing data. There is also another part of a URL that is often called _"Query"_ and this begins with a question mark. So you could have something that looks like `/students?name=mark` and this could mean get me all the students whose name is "mark". My personal rule of thumb is that queries are great for things that are optional OR for filtering data on the server side. 

#### METHOD
The METHOD of a request can be thought of, _what do you want to do?_ We can represent what a request is doing by talking about the route and method like so `GET /school`. So if I were to do a `GET /school` this could mean, _get me all of the schools in the DB_, but if I did a `POST /school` this could mean, _create a new school with the data in the body._ This is the same route, but since we have a different method we should expect different functionality. Also there are preconsieved notions on what each method does:

|  VERB | Functionality  |
|---|---|
| `GET`  | Retrieve data from the server  |
| `POST` | Send data to the server, create a new resource, kick off a process  |
| `PUT` | Update a resource  |
| `DELETE` | Remove a resource  |
| `PATCH`  | Append to a resource  |

In this lesson we will be using GET and POST to create and retrieve a resource. 

### What is Async?
Async or Asynchonous means _not synchronous or without synchonisity_. 

#### Analogy
One of the things I enjoy doing is cooking. And if you think about it I am a single core cook, I can't do more than one thing at a time in the kitchen. If I worked synchonously I would be terribly inefficeint. Imigine I were cooking burgers, but I also like toasted buns. If I worked synchonously then I would put the burgers on the grill, cook them, wait, flip, place cheese, take off grill. Then I could place my buns on the grill, toast them up real nice, then take them off and put cold patties on them. What would be better is if while the burgers were cooking I then put the buns on, then took them off together. This means that the only thing that I am doing at the same time is busy waiting for the burgers and preparing my buns. This is perfectly legal in my case as well as JavaScript's case and is the reason they use async.

#### Description
This is one of the interesting _quirks_ of JavaScript, that I love. First of all JS is not the only language to do this, but the way its implemented makes it very approachable. What async means for us is, some parts of your code will run out of order than you wrote it. In simple terms the way its implemented is you kick off a task _like file i/o_, the interpreter kicks off that task then runs the next bit of code, once the file is ready the interpreter will then come back and run the code that depended on the file _this is usually done in the form of a callback or a promise_.At first you may be disgusted by this fact, but once you learn the reasons why it becomes apparent why its useful. 

#### Reason for it
If everything was sychronous then each line of code would run in order. Meaning if we wanted to read something from a file while we were handling a request that request has to wait on our server to talk to the OS and ask to open a file, then read/decode the file, then compute whatever it needed with the files, perhaps do somthing else with the response that didn't require the file, then send it back to the client. If you think about it this sucks becuase we couldn't do anything else while we were waiting to open the file, we were _Busy Waiting_ and this is bad. What would be better is if we could ask the OS for the file, do some other non dependant tasks then come back to the file. This is the core concept behind async, do other things while you wait for long running tasks, like I/O.

#### How to use it
There are two ways async generally gets implemented in JS, that is _callbacks_ and _promises_. They both have their strengths and weaknesses.

##### Callbacks
A callback is just a function that gets called after some other code has ran. These are not restricted to async code. Callbacks can be used to run arbitrary code that gets passed into the function as an argument.
Here is a quick example
```js
let passInFive = (callBack) => {
    console.log("in passInFive");
    //other arbitrary code
    return callBack(5);
}

let six = passInFive((x) => {
     return x + 1;
});

let twentyFive = passInFive((x) => {
    return x * 5;
});
```

These are some non async ways that callbacks can be used. All they really mean is that a lower function is calling back to a function you gave it. This is often called the [Hollywood Principle](http://wiki.c2.com/?HollywoodPrinciple).

##### Promises
So a promise is just that, it is like an I-O-U but in programing. When a function returns a promise it is _saying,_ "this doesn't have a value, but it will I _promise ;)_." This is only used in an async context. A promise is actually a class in JS and more info can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), but to sumarize here is an example:
```js
//naive use case, has happened to me several times
let foo = someLongRunningTask();
console.log(foo.name)//undefined, since foo hasn't resolved yet it doesn't have a value. It's not null, because it will have a value.

//Correct way
someLongRunningTask().then((foo) => {
    console.log(foo.name)//fred, this function is not called until the promise has resolved. more info can be found here {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
});

//Correct way with error handling
someLongRunningTask().then((foo) => {
    console.log(foo.name)
}).catch((err) => {
    console.log(error); //This will be called if something went wrong with the promise more info can be found here {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch}
});
```


### What is Persistance?
This is the idea of storing data across program runs. If we run a script and alter a variable, we don't expect that variable to have the same value as we left it at the last run of the script. Same is true for servers, this is why we use persistance to save data if we restart our server, or if a user logs in and out. A naive solution and often the first one people are introduced to is writing to file in plain text. This is actually fairly powerful and useful in some cases, but it has its limitations. The next thing to use is a data base, this is just a special program that is optimized for storing and retrieving organized data. We will generally refer to these as data stores since that refers to anything that is used for storing data. _note: don't store large binary objects in DBs, they will choke and it will be your fault, use a file system_

### FS module NodeJS.
Here is more data on the [FS module](https://nodejs.org/api/fs.html) in nodeJS. In short this is the tool used to read and write info from a file and interact with a server's file system.

_I will add more notes in this after I give the lesson in person on 2/2/2018 6pm._

_p.s. this is a work in progress 01:28 2/2/2018_
