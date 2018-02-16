Lesson 3 NPM and Express
---
This lesson talks covers using NPM to install packages and using Express.js

### Goals
* What is a package manager?
* What is NPM?
* How to use packages?
* What is Express?
---

### What is a package manager?
A package manager is a program that manages programs. One uses it to download, update, and remove applications or libraries that don't come default. A lot of them will also help manage versions of software. Package managers can _roughly_ be broken up into 2 catagories **Application** and **Library**.

#### Application Package Managers
Application package managers are used for managing apps on a computer. Unfortunately windows does not come with one, but the Windows store sure does try. If you use `cygwin` or `babun` you can use `pact`. 

Mac has the app store, but this really isn't useful for dev tools. So I recommend visiting [lesson-0](../lesson-0) and installing `brew`. Brew will allow you to, via the command line, install and update applications. This is great for installing `git`, `node`, `python`,... development tools.

Linux is a whole different beast in and of itself. Debian distros like `ubuntu`, `noobs-for-raspberrypi`, and `mint` as well as others all use `apt-get` as their default package manager. 

Other distros like `Red Hat` and `Open Suse` use `yum` as the package manager. Then `Arch linux` and `Manjaro` use `pacman` as the package manager.

#### Library Package Manger
To get more specific with development each language generally has their own version of package managing. Java has `gadle` and `maven`. Python has `pip`. Javascript has `NPM` or node package manager.