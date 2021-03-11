---
layout: default
title: Command Line Client
parent: HEXONET
nav_order: 4
showtoc: 1
---

# Command Line Client

[![License: MIT]({{site.baseurl}}/assets/images/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/hexonet.ispapicli.svg)](https://www.python.org/)
[![PyPI](https://img.shields.io/pypi/v/hexonet.ispapicli.svg)](https://pypi.org/project/hexonet.ispapicli/)

aka. [**hexonet.ispapicli**](https://pypi.org/project/hexonet.ispapicli/)
## Introduction

This site provides documentation for the ISPAPI Command Line Client. Here you will find documentation for installing on several operating systems, namely Windows, macOS / OS X, and Debian derivates like Ubuntu.

What is this tool about?

This tool enables you to connect to our backend system API and to manage your account through GUI or Command Line Interface. In general, this tool consists of two major parts: Graphical User Interface (GUI) and Shell (or so-called command line interpreter).

![Command Line Client GUI]({{site.baseurl}}/assets/images/ispapicli/gui.png)

## How to use this tool?

Basically this tool can be used in two ways: The GUI and Shell as shown below:

### 1 - Run it via Shell

Once you have downloaded the tool, you can run it from your Shell. First, you may start by runnig the following command there:

```bash
> ispapi --help
```

This will show you how to use the tool:

![Help Page]({{site.baseurl}}/assets/images/ispapicli/help.png)

From this point on, you can follow the notes and run your desired command. However, here are few important notes for you:

- Note that you can either use the equal sign "=" e.g. `--command = querydomainlist`, or
- You can use spaces as a separator e.g. `--command querydomainlist"
- You may also use shortcuts, e.g. `-c` instead of `--command`, refer to the tool help command for more information about other commands

You must login first in order to requrest a command, you can login by running the command:

```bash
> ispapi -u = YOUR ID -p = YOUR PASSWORD -e = {ote,live}
```

### 2 - Run it via GUI

There two ways to start the GUI:

- From the Shell, then run the command:

  ```bash
  > ispapi -g OR ispapi --gui
  ```

- From the executable/portable file by simply openning it, it will immediately start the GUI

:point_up: **Useful Tip: You can run exactly the same commands from the GUI and Shell!**

## Tool Features

This section provides you with a quick introduction to almost all the features included in this tool.

### 1- Manage Your Account Remotely

- You can execute any command of our backend system API, for more information read our [API Documentation](https://github.com/hexonet/hexonet-api-documentation).
- For quick view of the command use the command: `--list` (see Fig.1)
- To view how to use a specific command, run the command `--help = COMMAND-NAME`. e.g. `--help = querydomainlist`, the results as shown in Fig.2

| ![List Commands]({{site.baseurl}}/assets/images/ispapicli/list.png) |
| :-----------------------------------------------------------------: |
|                      Fig.1 - list all commands                      |

| ![Command Help]({{site.baseurl}}/assets/images/ispapicli/helpc.png) |
| :-----------------------------------------------------------------: |
|                    Fig.2 - show command details                     |

### 2 - Login/Logout and Session Management

- Login/logout management instead of sending your login credentials everytime you requrest a command
- Each login session is valid for 60 minutes
- Accessible from GUI and Shell

![Login]({{site.baseurl}}/assets/images/ispapicli/login.png)

### 3 - Graphical User Interface (GUI)

The GUI has the following features:

#### Save the Command to a File

- This feature enables you to save the command and the results into a text file. Use the button in the tool bar to save
- Tip: Use shortcut `CTRL + S` to quickly save the command to a file.

#### Command Auto-Completion

Once you start typing the command, a dropdown list will be displayed to show all possible matches.

![Command Auto-Completion]({{site.baseurl}}/assets/images/ispapicli/autocomplete.png)

#### Command Minimum Parameters

Some commands require a minimum number of parameters. This tool displays all required parameters once you have typed a command.

![Command Minimum Parameters]({{site.baseurl}}/assets/images/ispapicli/minparams.png)

#### Copy the Results

Once you start typing the command, a dropdown list will be displayed to show all possible matches.

- You can copy the command and the results using the copy button located on the toolbar or the one from the menu bar.
- Tip: You can also use the shortcut `CTRL + C` to copy the results to the clipboard.

## Download and Installation

This Tool is available for several operating systems: Windows, macOS / OS X, and Debian derivates like Ubuntu.

### PyPi Version

- To start using this tool, you can clone it from GitHub and run it immediately, or
- You can also install it using pip.

### Executable Version

- To download a portable and executable version of this tool, check out the [Release Overview](https://github.com/hexonet/ispapicli/releases). _This option only available for Linux distributions_
- To create a portable/executable file on Windows or macOS, do the following steps:

  1. Install “pyinstaller”:

  ```bash
  > pip install --upgrade pyinstaller
  ```

  2. Go to your cloned folder and install the requirements:

  ```bash
  > pip install --upgrade -e
  ```

  3. Go to your cloned folder and navigate to directory `hexonet/ispapicli`, then run the following command:

  ```bash
  > pyinstaller --onefile ispapicli.py
  ```

  4. A folder called “dist” will be created in which the excutable file is located.
