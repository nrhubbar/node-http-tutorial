Lesson 0 - Getting Started
---

This lesson explains how to set up your dev environment to be conducive to NodeJS development.

### Goals
* [Install Pre-reqs](#installing-nodejs)
* [Install Command Line Tools](#setup-command-line-tools)
* [Install Development Environment](#setting-up-dev-environment)
* [Explore Language](#exploring-the-language)

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
    * Console has a sucky preferences selection; poor color range; and inability to split and tab panes easily
2) You will probably be using bash, I recommend using `zsh` this is a different shell interpreter, but there is no extension called `oh-my-zsh` that comes with some really neat and effective shortcuts and plugins.
3) Run `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    * If you are missing `git` please install it now. `sudo apt-get install git`
4) I recommend installing another theme called spaceship.
5) Run `curl -o - https://raw.githubusercontent.com/denysdovhan/spaceship-prompt/master/scripts/install.sh | zsh`
6) Close and reopen your terminal
7) You should now have a pimped out command line!

_P.S. I also recommend this tool called thefuck, https://github.com/nvbn/thefuck , helps you when you fat finger a command or forget a flag_

---

### Setting Up Dev Environment
Now that you should have everything else set up we should be ready to start writing code. Thankfully, I think this will be the only OS agnostic part! How you write your code can sometimes be just as important as the code you write. 

If you are writing code in `notepad`, `GEdit`, `nano`, or `TextEdit` please stop now, this is slowing you down and stopping you from being the best programmer you could be. 

Also, writing in `vim` or `emacs` is effective but, if you are not accustomed to them and are working on a team where they expect you to spit out code and solve problems in a timely manner, there are better solutions.



#### Text Editor
For small projects and brevity, I recommend a Text Editor. I like VS Code because is it snappy and has a rich package community. I used to use Atom, but it has gotten slower, but it has an extremely rich package community. Brackets is another, but it is sort of fringe _imho_. These 3 are all electron apps, meaning they are running on top of chrome. So, inherently slower :/. Sublime 3 is nice since it is a native app. It's super fast, but it doesn't have a strong package community like some of the other editors.

1) Visit https://code.visualstudio.com/download
2) Download and install
3) Next, I recommend adding it to your `PATH` so you can open projects by running `code .` in the command line. _this will open the current directory and subdirs in VS Code_
4) Start exploring Extensions, I like to add the most downloaded ones for whatever language I am working with. 

#### IDE
For larger projects and debugging, I recommend an IDE. These offer things like IntelliSense, Build tools, Code Spotting, and Debugging. IDEs come at a cost of being heavy on your processor/Ram, but they are worth it for making writing code in large projects FAST.

More specifically, I recommend the JetBrains suite of tools. While you are a student, I recommend getting your free license while you can. It is a stellar tool! If you are on Linux you are SOL becuase only community IntelliJ is offered, _which is still a great tool_.

1) Get your student license, https://www.jetbrains.com/student/
2) Install the JetBrains Toolbox, this app will manage your IDEs and their versions as well as your projects. https://www.jetbrains.com/toolbox/
3) Once you get the Toolbox installed, I recommend installing WebStorm since we will be working with JS. 

### Exploring the Language
* Video Tutorials:
    * Kyle Robinson Young made about 50 videos then disappeared, but he is super good: https://www.youtube.com/user/kylerobinsonyoung/playlists
    * Derek Banas is a stellar YouTuber, still active and had a great series on almost anything coding related as well as interesting let's plays: https://www.youtube.com/user/derekbanas/playlists
    * LevelUpTuts are useful for more in depth stuff: https://www.youtube.com/user/LevelUpTuts
* Text Sources
    * YDKJS is pretty useful if you want a deeper understanding of JS: https://github.com/getify/You-Dont-Know-JS
    * Awesome Lists are a great way to explore unfamiliar topics: https://github.com/sorrycc/awesome-javascript
* Existing projects: _beware, some of this code is shit, coding is a learning process_
    * https://github.com/technetos/radius_chat_server
    * https://github.com/multimedia-term-project
    * https://github.com/i-do-code
    * https://github.com/common-threads-group
    * https://gitlab.com/recommendation-as-a-service

