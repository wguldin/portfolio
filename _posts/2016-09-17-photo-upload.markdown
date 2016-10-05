---
layout: post
title: "What makes for a good upload UX?"
date: "2016-09-17 11:05:37 -0500"
---

At our web app, BriteCore, we're slowly building up our design system of UI components. If we're adding a pretty standard component, I'll start by first doing a little research, and see if there any common patterns or best practices.

So, when we needed a file upload component, I was pretty surprised that there weren't many guidelines for an intuitive, seamless user experience.

## A contextual choice: Conversation or Attachment.



Even though there weren't many recent articles about it, I knew a lot of the web apps I use regularly have a nice UX for uploading files. So, I took a closer look at Slack, Github, Trello, Basecamp and StackOverflow.

These apps all handled the problem in a similar way, and it was clear the context of the design determined what the UX should look like. If you're uploading images as part of a 'conversation', there was usually very little chrome around the design. Almost


## The base
If you are working on a web project, you probably know that most file uploading technically relies on manipulating the file input, which is (notoriously) (tough) (to customize). For this project, we didn't try and re-invent the wheel. Instead, we went with [dropzone](http://www.dropzonejs.com/). It seemed pretty robust compared to other options. We heavily modified it and created a custom component with our front-end framework, Knockout.js.

## A choice: Conversational or Attachment
Before starting all that though, I researched the photo upload tool of a few web apps I routinely use, including Slack, Github, Trello, Basecamp and StackOverflow.

## More decisions.

We knew our component would just be used in more of the 'attachment' role for now, so that's the design we went with.


Even though I couldn't find a lot of additional information about file upload UX, I kenw




When I first start designing a new component, let


 feature or tool, chances are someone has already written up how they did it.

flash ...

The other day, I had to come up with a new UI for uploading photos and other documents to our web app, BriteCore. We're completely redesigning the app, and the previous upload tool (a raw file input) was last touched several years ago. Even then, there were better techniques for this, and the web has come even further now.

Still, technically, it's tough to make an intuitive, seamless upload tool. A lot of web apps have a nice UX for this, but best practices and guidelines were scarce. So, here's what we found out while creating our new tool.

## The base

Uploading files is complicated, and even though there are sophisticated ways to handle it, a lot of it still revolves around manipulating the file input, which is (notoriously) (tough) (to customize).

##


A lot of web apps and sites have a good UX for this, but I didn't really find any good advice a



At BriteCore, we're working with designs that are now 6+ years old, and at the time, they weren't written with standards (and of case)

Outline:

Old pages, so building from the ground up.
