---
title: Git
tags: git, github
author: Mahta Rezayazdi
date: "2018-02-18"
description: Learn about git and start your cool projects.
discussionId: "2018-02-18-git-and-github"
---

# Introduction to git

## What is git?

Alright, we are already familiar with javascript basics, and we might want to create some cool projects.

Imagine that you and your friends are working on the same project.
you probably are continually writing new source code and changing the existing source code.
In this case, the team needs some software tools that help them manage changes to source code over time.
Version control software (VCS) keeps track of every modification to the code in a special kind of database.
If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix
the mistake while minimizing disruption to all team members.
Developing software without using version control is risky, like not having backups.
n
Git is a free, open source and the most commonly used distributed version control system (DVCS) today.

Git was started by Linus Torvalds, the same person who created Linux.

## What is GitHub?

GitHub is a hosting service for Git repositories.
GitHub is a website where you can upload a copy of your Git repository.

Git and Github are not the same things:
Git is the tool, GitHub is the service for projects that use Git.

GitHub provides free plans for open-source projects and paid plans offering unlimited private repositories.

Before moving on to the git basics, please create your personal GitHub account.

## Git basics

#### Install git

```bash
$ sudo apt-get update
$ sudo apt-get install git
$ git --version
```

#### Create a new directory and open it

```bash
$ mkdir my-directory
$ cd my-directory
```

#### Create some files

```bash
$ touch file.js
$ touch file2.js
```

#### Create a new git repository.

```bash
$ git init
```

The directory now has an empty repository in /.git/.

The repository is a hidden directory where Git operates.

Git keeps all of its files in the .git directory.

#### Check the hidden files

```bash
$ la
```

#### Check the current state of the project

You can edit the files and check the stage of your project with the following command

```bash
$ git status
```

#### Add changes to the staged area

```bash
$ git add ' file-name '
```

#### Unstage

```bash
$ git reset ' file-name '
```

The files listed here are in the Staging Area, and they are not in our repository yet.

Staging is a step before the commit process in git.

#### Commit

```bash
$ git commit -m "a message describing what we've changed".
```

Now if you check the current state of the project you will see 'nothing to commit, working directory clean'.

#### Undo a commit

We can refer to our most recent commit, using the HEAD pointer.

```bash
$ git reset Head~
```

#### History

Make a few commits. and let's browse them to see what we changed.

```bash
$ git log
$ git log -1
$ git log -2
```

#### Add a remote repository

To push our local repo to the GitHub server we'll need to add a remote repository.

'Origin' is the default name of the remote git repository you cloned from.

The URL could be your repository on GitHub.

```bash
$ git remote add origin ' URL '
```

#### Push command

push command tells Git where to put our commits.

So let's push our local changes to our origin repo (on GitHub).

The name of our remote is `origin` and the default local branch name is master.

The -u tells Git to remember the parameters, so next time simply run git push.

```bash
$ git push -u origin master
```

#### Diff

The main objective of version control is to enable you to work with different versions of files.

Git provides a command 'diff' that lets you to compare different versions of your files.

```bash
$ git diff
```

Compares working directory with index (staged area).

It shows the changes that are not staged yet.

```bash
$ git diff HEAD
```

Compares working directory with the committed version.

It shows the list of changes after your last commit.

```bash
$ git diff --cached
```

Compares index (staged area) with the commited version.

It shows the diff between your last commit and changes to be committed next.

git diff --cahched will only show changes to files in the "staged" area.

git diff HEAD will show all changes to tracked files.

If you have all changes staged for commit, then both commands will output the same.

#### Pull command

Pull command incorporates changes from a remote repository into the current branch
We can check for changes on our GitHub repository and pull down any new changes

```bash
$ git pull origin master
```

#### Branch

Branching is a feature available in most modern version control systems.

Git branches are effectively a pointer to a snapshot of your changes.

When you are working on a feature or bug you may want to create a copy of the code and make separate commits.

#### Adding a new branch

```bash
$ git branch ' branch-name '
```

#### Check branches

```bash
$ git branch
```

#### Switching Branches

```bash
$ git checkout ' branch-name '
```

when you're done you can simply merge this branch back into the main master branch (or any other intended branch).

```bash
$ git merge ' branch-name '
```

And finally, you can git push.

```bash
$ git push
```

## Additional resources

* For more information and detailed explanations visit the amazing [Fork and Pull Request Workflow](https://github.com/susam/gitpr) repository.
* Practice your git skills with this interactive [tutorial](https://try.github.io/levels/1/challenges/1).
