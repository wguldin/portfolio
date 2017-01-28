---
layout: post
title: "What makes for a good upload UX?"
date: "2016-09-17 11:05:37 -0500"
---

As someone who works on form design a fair bit, I remember when I first came across the 'file' input. After a couple seconds of quick dev tooling, I realized it wasn't easy to style one of these.

A google search confirmed that file inputs are [notoriously hard](http://stackoverflow.com/questions/572768/styling-an-input-type-file-button) to customize.

The other day at work, I had to revisit this old problem. We were redesigning a page that used a plain file input for photo uploads.

Of course this had lots of limitations.

* Multiple uploads at once weren't enabled.
* Renaming of the file wasn't supported.
* There were no loading indicators, or error messaging if something went wrong.

{% include image.html name="original-design.png" caption="Our original photo uploader required adding a new file input for each photo, pretty awful UX for dozens of uploads." %}

[Dropzone](http://www.dropzonejs.com/), an awesome JS library, has pretty much solved the technical issues around file inputs. But we thought it's user experience could be improved, and set out create a custom design on top of the library.

As we got started, it quickly became clear that there weren't many guidelines out there for an effective file upload tool. So, I've gathered what we learned through this process and hope that it helps others in a similar situation.

## A contextual choice

To work on this component, I started by thinking about how some of my favorite web apps handle this. At BriteCore, we use tools like Slack, Github and Trello pretty much everyday.

Looking at these, and some other well-designed apps, it's clear there's a couple contexts for uploading files.

### Conversational File Upload

The first is a **conversation**. Typically, this pattern involves embedding photos in a comment chain. It has a couple of other features too:

* Usually, you're uploading one image at a time.
* You can't rename files after uploading them, since the name isn't visible in the conversation flow.
* Images can be deleted directly in the text editor.
* A subtle UI is used to show that images can be uploaded.

{% include image.html name="conversational-examples.png" caption="Examples from Github (top) and Basecamp (bottom) of a conversational upload. Basecamp uses a paper clip icon, and also supports drap & drop. Github uses a help message on the comment textarea to let people know about uploads." %}

As you can see, if you're talking about an image with someone, this flow works well since it embeds the image alongside the conversation.

### Attachment File Upload

The second UX pattern I found for this is more traditional, and gets its name from email attachments. This approach usually involves a dedicated 'upload' button, that brings up a modal interface with a drag and drop area. Some features of this workflow include:

* Works well for a range of file types, since you don't have to always render a preview.
* Can allow renaming after the upload is complete.
* Can provide feedback on the status of multiple uploads at once.
* Possible actions (drag/drop, rename, delete) are usually more explicit in the UI.

{% include image.html name="attachment-examples.png" caption="Trello (top), Gmail (bottom left) and StackOverflow (bottom right) use more an explicit attachment workflow." %}

## Our workflow

Our file upload tool was being used for uploading photos of a home to an insurance policy. So, it definitely fit the 'attachment' pattern.

With that in mind, I began sketching what this might look like BriteCore.

One of the bigger questions I debated here was if I should show every thumbnail, or go with a list-detail display. Ultimately, though, if you're trying to quickly find and edit a photo's name/description, the thumbnail is the easiest way to locate it. This takes up the most space, but it seemed like the best approach.

{% include image.html name="sketches.png" caption="A series of sketches for our photo uploader. From left: Large thumbnail with file name; List-detail view with large thumbnail; Small thumbnail with inline input for file name." %}

After deciding on the left-most sketch, here's how it turned out once we completed the component:

{% include image.html name="final-design.png" caption="Once a button is clicked, a modal with a drag and drop area opens. We then use a progress bar component to show loading progress, and allow the file to be renamed before it is saved. " %}

## User feedback

This component has tested pretty well, with users liking it much better than what was there before. One thing I've noticed that I didn't expect though, is that on a decent connection, the photos upload almost instantly.

So, the loading bars are redundant in those cases, and a couple of users have wondered why they have to hit 'save' in the modal after they are uploaded.

One solution I've thought about is making the upload action happen right on the page, but I'm not quite convinced of this approach yet.

### Final Thoughts

The next time you need to design a photo upload tool, hopefully thinking about it as an attachment, or as conversation, will help guide your design. Any thoughts or comments are always appreciated!
