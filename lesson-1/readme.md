Lesson 1 - My First Server
---

This lesson will be help explain a server's job, different patterns involved, as well as the concept of persistance.

### Goals
* What is a Server?
* What is HTTP? What is REST?
* What is NodeJS
* NodeJS Http Library
* Server Side Rendering vs. Client Side Rendering
---

### What is a server?
    A server is just another computer that is running special software to react to events over the network. A server can do literally anything you want it to do, it is arbitrary what it does. They play a major role in the [Client Server Architecture](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). To sumarize a client either requests data that a server has, or sends data to the server, but it always iniates the transaction. Servers can be clients to other servers if you wanted as well. Another point about servers is that they are usually specialized computers since they a doing a specific task. They may have powerful CPUs and huge amounts of RAM. For a production server it is pertanent that is has high uptime, meaning it shuts off very rarely, but for our needs this is less of a concern.

### What is HTTP? What is REST?
    HTTP (Hyper-Text Transfer Protocol) is a way of transferring data over the internet. For more information look [here](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). But here are some sumarizing points:
        * It is done over TCP, meaning it will resend if it doesn't get an acknowlegement from the server
        * There is a Request packet and a Responst Packet
            * Request has: headers for metadata and authorization; has a [Verb](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to describe the intention of the method; Has a URI to describe where it is going; and it can have a body depending on the Verb
            * Response has: headers; [Response Codes](https://httpstatuses.com/) for describing the status of the request; and a body including data sent back from the server.
        * Status Codes are a really neat idea because in one sense they are arbitrary, but in another everyone adopts them to have the same meaning. **IT IS BAD PRACTICE** to return the wrong status code for what happend. _i.e. don't send a 200 OK if it failed_
    REST (Representational state transfer) is a strategy to send data across the internet using HTTP. It emphasizes Scalability and Reliability. Feel free to read more on it [here](https://en.wikipedia.org/wiki/Representational_state_transfer). It builds on the idea that HTTP verbs should mean something. In other strategies it may make sense to use a post to ask for data from the server, or a get to delete something from the server, or really anything becuase the context is in the URI. With REST they go a different direction they say, "A different VERB on the same URI should do something different." and although it may not sound like much, this is revolutionary. If you ever had the misfortune to work with CGI Servers you'll realize that it is difficult to do anything other than `GET` and `POST`. With REST we take advantage of more of the VERBs to achive CRUD capabilities for each of our resources. CRUD stands for Create, Read, Update, Delete. These are the main things that you will do with your data.

### What is NodeJS
    NodeJS is server side JS. In other words it is JS that runs outside of the browser, meaning you can use it for anything. It uses the same syntax as JavaScript and has the same functionality, except DOM stuff. It also has its own libraries that are not included in vanilla JS. This includes things like HTTP and running a server; FS reading and writing to a file system; and OS for interacting with the host system. These are things that would be dangerous to do in the browser, but a necesarry for a language to have. A little history about NodeJS, it got its start as a project to pull out the JS interpreter in Chrome, called V8. Then the idea came along, _"We write JS on the client side so much, why not use it to write code on the server side."_ This again is a powerful concept and is super useful for engineers who work on both sides of the project, _Full Stack_. 

### NodeJS HTTP Library
    This is a default library that allows you to not only send HTTP requests, but it also allows you to spin up an HTTP server and begin handling them. You can find more information in [my-first-server.js](my-first-server.js).

### Server Side Rendering vs. Client Side Rendering
    This is an interesting concept to think about, but if you have worked with a server before chances are that you were sending HTML back to a browser. This is called _Server Side Rendering_, this is because the server is building the view for the client and is sending back a full HTML document. If you want to load dynamic data your server needs to pull the data from a data store, format it, insert it into the HTML, then send that HTML doc back to the client. This can take awhile for the server, which is why it is generally not used for highly dynamic pages. 

    Then what is _Client Side Rendering_? This is where a client get a simply HTML document from **a** server, then requests data from the server. This initial HTML document will generally have a link to some client side JS code to handle interactivity. This is great because it allows the client to build a view with data from different sources easily. It also frees up the server because all it needs to do is send the data back in an agreed upon format, like JSON, XML, CSV, Text...


_ps: this was written after I had given the lesson on it_