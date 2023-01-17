---
layout: default
title: Command Line Client
parent: HEXONET
nav_order: 4
showtoc: 1
---

# Command Line Client

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](https://opensource.org/licenses/MIT)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/hexonet.ispapicli.svg)](https://www.python.org/)
[![PyPI](https://img.shields.io/pypi/v/hexonet.ispapicli.svg)](https://pypi.org/project/hexonet.ispapicli/)

aka. [**hexonet.ispapicli**](https://pypi.org/project/hexonet.ispapicli/)

## Introduction

This site provides documentation for the ISPAPI Command Line Client. Here you will find documentation for installing on several operating systems, namely Windows, macOS / OS X, and Debian derivates like Ubuntu.

What is this tool about?

This tool enables you to connect to our backend system API and to manage your account through GUI or Command Line Interface. In general, this tool consists of two major parts: Graphical User Interface (GUI) and Shell (or so-called command line interpreter).

![Command Line Client GUI]({{ 'assets/images/ispapicli/gui.png' | relative_url }})

## Requirements

Having

* git

installed and working.

## How to use this tool?

Basically this tool can be used in two ways: The GUI and Shell as shown below:

### 1 - Run it via Shell

Once you have downloaded the tool, you can run it from your Shell. First, you may start by runnig the following command there:

```bash
> ispapi --help
```

This will show you how to use the tool:

![Help Page]({{ 'assets/images/ispapicli/help.png' | relative_url }})

From this point on, you can follow the notes and run your desired command. However, here are few important notes for you:

- Note that you can either use the equal sign "=" e.g. `--command = querydomainlist`, or
- You can use spaces as a separator e.g. `--command querydomainlist`
- You may also use shortcuts, e.g. `-c` instead of `--command`, refer to the tool help command for more information about other commands

You must login first in order to requrest a command, you can login by running the command:

```bash
> ispapi -u YOUR ID -p YOUR PASSWORD -e {ote,live}
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

- You can execute any command of our backend system API, for more information read our [API Documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }}).
- For quick view of the command use the command: `--list` (see Fig.1)
- To view how to use a specific command, run the command `--help COMMAND-NAME`. e.g. `--help querydomainlist`, the results as shown in Fig.2

| ![List Commands]({{ 'assets/images/ispapicli/list.png' | relative_url }}) |
| :-----------------------------------------------------------------: |
|                      Fig.1 - list all commands                      |

| ![Command Help]({{ 'assets/images/ispapicli/helpc.png' | relative_url }}) |
| :-----------------------------------------------------------------: |
|                    Fig.2 - show command details                     |

### 2 - Login/Logout and Session Management

- Login/logout management instead of sending your login credentials everytime you requrest a command
- Each login session is valid for 60 minutes
- Accessible from GUI and Shell

![Login]({{ 'assets/images/ispapicli/login.png' | relative_url }})

### 3 - Graphical User Interface (GUI)

The GUI has the following features:

#### Save the Command to a File

- This feature enables you to save the command and the results into a text file. Use the button in the tool bar to save
- Tip: Use shortcut `CTRL + S` to quickly save the command to a file.

#### Command Auto-Completion

Once you start typing the command, a dropdown list will be displayed to show all possible matches.

![Command Auto-Completion]({{ 'assets/images/ispapicli/autocomplete.png' | relative_url }})

#### Command Minimum Parameters

Some commands require a minimum number of parameters. This tool displays all required parameters once you have typed a command.

![Command Minimum Parameters]({{ 'assets/images/ispapicli/minparams.png' | relative_url }})

#### Copy the Results

Once you start typing the command, a dropdown list will be displayed to show all possible matches.

- You can copy the command and the results using the copy button located on the toolbar or the one from the menu bar.
- Tip: You can also use the shortcut `CTRL + C` to copy the results to the clipboard.

#### Update Current Commands

You can always update your current commands to have the latest version from github.
Simply use the button highlighted in red:

![Update Commands]({{ 'assets/images/ispapicli/updateCommands.png' | relative_url }})

#### Update The Tool

You can also update the tool to the latest version by clicking on the button highlighted in red:

![Update Tool]({{ 'assets/images/ispapicli/update.png' | relative_url }})

![Update Finished]({{ 'assets/images/ispapicli/updateDone.png' | relative_url }})

![Current Version]({{ 'assets/images/ispapicli/version.png' | relative_url }})

#### Subuser Option

The tool also offer a subuse fucntionality where you can provide a username for the entered command.

![Current Version]({{ 'assets/images/ispapicli/subuser.png' | relative_url }})

#### Batch Functionality

Batch option (highlighted in red) enables you to run the command for multiple entries, as shown in the figure below:

![Current Version]({{ 'assets/images/ispapicli/batch.png' | relative_url }})

## Download and Installation

This Tool is available for several operating systems: Windows, macOS / OS X, and Debian derivates like Ubuntu.

### PyPi Version

- To start using this tool, you can clone it from GitHub and run it immediately, or
- You can also install it using pip.

### Executable Version

- To download a portable and executable version of this tool, check out the [Release Overview](https://github.com/hexonet/ispapicli/releases). 
- To create a portable/executable file on Windows or macOS, do the following steps:

  1. Go to your cloned folder
  2. Update “pyinstaller”:
  
     ```bash
     > pip install --upgrade pyinstaller
     ```

  3. Install our dependecies:
  
     ```bash
     > pip install --upgrade -e
     ```

  4. Run:

     ```bash
      > cd hexonet/ispapicli
      > pyinstaller --onefile ispapicli.py
      > cd ../..
     ```

This will create a folder called “dist” where you'll find the generated excutable.
