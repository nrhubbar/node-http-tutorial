Lesson 0 - Getting Started
---

This lesson explains how to set up your dev environment to be conducive to NodeJS development.

### Goals
* Install Pre-reqs
* Install Command Line tools
* Install Development Environment
* Explore language

### Installing NodeJS

NodeJS is not hard to get up and running with. I will explain breifly how to install as well as link to outside tutorials to help you.

#### Windows
1) Navigate to in your favorite web browser _chrome_ https://nodejs.org/en/
2) Download LTS version. This stands for Long Term Support, generally meaning it has been out for longer, so should contain less bugs and break less, _but have less features if that is what you are looking for_.
3) Run the installer. **Make sure you add it to your `PATH` & install `npm`**
4) Then install it!
5) I also recommend a tool called `NVM` Node Version Manager. This allows you to easily change the version of node in your command line. _Useful if you are working on multiple projects that may require different versions of NodeJS_.
6) Navigate to https://github.com/coreybutler/nvm-windows/releases
7) Click on `nvm-setup.zip` and download
8) Extract and run `nvm-setup.exe`
9) Now you are set!

#### Linux
Check out Command line Tools first for linux.
1) Take a look at https://nodejs.org/en/download/package-manager/ but it should basically be running: `sudo apt-get install -y nodejs` or something like that in your command line
2)  I also recommend a tool called `NVM` Node Version Manager. This allows you to easily change the version of node in your command line. _Useful if you are working on multiple projects that may require different versions of NodeJS_.
3)  Run: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | zsh` in your command line
4)  You are all set!

#### Mac
Check out Command line Tools first for Mac.
1) Run `brew install node` inst the command line
2) I also recommend a tool called `NVM` Node Version Manager. This allows you to easily change the version of node in your command line. _Useful if you are working on multiple projects that may require different versions of NodeJS_.
3)  Run: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | zsh` in your command line
4)  You are all set!

---

### Setup Command Line Tools
The command line is a very versatile tool that you will eventually come to love. But _imho_ it takes some tweaking to fully enjoy and be useful with. Although some may think its silly, I fully believe that a pretty command line is an effective one. :)

#### Windows
Windows has always had the curse of having a sucky command line. This has gotten better by tools like WSL _(Windows Subsystem for Linux)_ but is still lacking with poor emulation tools. For this I will walk you though the tool set I use!
1) First navigate to http://babun.github.io/
2) Download and install
3) It should be running, if not right click on the Desktop and click `Run babun here` or find the shortcut and run it.
4) I recommend installing another theme called spaceship.
5) Run `curl -o - https://raw.githubusercontent.com/denysdovhan/spaceship-prompt/master/scripts/install.sh | zsh`
6) Close and reopen babun
7) you should now have a pimped out command line!

#### Linux
Unix has always had a pretty good CLI, so it is not hard to get started.
1) If you are on Ubuntu I recommend installing `Terminator` from the App Store, it is a pretty good _"Terminal Emulator"_
    * Hol' Up what is a _"Terminal Emulator"_??? So the way I understand it, and you can google it for the correct answer, In the olden days everyone worked off of one shared computer called a mainframe. Everyone was connected to it and could run programs in there own _session_ from thier terminal. It was called a terminal because it was at the end, as opposed to a router or something. This only had a command line interface. Command Line Interface or CLI refers to the fact that you interact with it via typing special words/symbols. Things can have a CLI and not be a Terminal. Consoles are similar as well but can also refer to script interpreters, like python or the Chrome JS Console. **Now** to the original question, a Terminal Emulator, simulates a terminal as the real terminal is underneath the UI. You can still get to it, but it is easier and safer to work with an emulator.
2) If you are on a different flavor find an emulator you like, I recommend ones with a good settings menu, for choosing the right theme and all.
3) You will probably be using bash, I recommend using `zsh` this is a different shell interpreter, but there isn extension called `oh-my-zsh` that comes with somre really neat and effective shortcuts and plugins.
4) Run `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    * If you are missing `git` please install it now. `sudo apt-get install git`
4) I recommend installing another theme called spaceship.
5) Run `curl -o - https://raw.githubusercontent.com/denysdovhan/spaceship-prompt/master/scripts/install.sh | zsh`
6) Close and reopen your terminal
7) you should now have a pimped out command line!

#### Mac
Since Macs are a flavor of Unix, they too have a strong command line, **BUT** are missing a good package manager. This is a tool that allows you to install stuff via the command line.
1) First Console sucks, like bad! Get iTerm2 from here: https://www.iterm2.com/
    * Console has a sucky prefrences selection; poor color range; and inability to split and tab panes easily
2) You will probably be using bash, I recommend using `zsh` this is a different shell interpreter, but there isn extension called `oh-my-zsh` that comes with somre really neat and effective shortcuts and plugins.
3) Run `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    * If you are missing `git` please install it now. `sudo apt-get install git`
4) I recommend installing another theme called spaceship.
5) Run `curl -o - https://raw.githubusercontent.com/denysdovhan/spaceship-prompt/master/scripts/install.sh | zsh`
6) Close and reopen your terminal
7) you should now have a pimped out command line!