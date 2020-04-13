---
layout: post
title: "Using a Design System to Connect Microservices"
subheader: "Microservices are a popular engineering concept for breaking up a large application into many smaller and more manageable pieces. BriteCore was looking to use this technique to rewrite its product. As design director, I understood the technical merits of this approach, but thought it could lead a product that felt disjointed to use and inconsistent."
date: "2020-03-28 11:00:00 -0500"
sidebar: /summary/design-system-case-study.markdown
order: 3
---

<p class="u-text--lg">
    Microservices are a popular engineering concept for breaking up a large application into many smaller and more managable pieces. BriteCore was looking to use this technique to rewrite its product. As design director, I understood the technical merits of this approach, but thought it could lead a product that felt disjointed to use and inconsistent.
</p>

Early on, I proposed we adopt a design system to prevent these issues and to improve our product's design consistency. At the time, though, we had only one UI Engineer. So, it was important for any design we created to be implemented easily. I also had several other goals for project:

* We should ship the initial version quickly, and iterate often.
* Our system should provide consistency and have UX best practices built in.
* Documentation for the design system should be [publicly accessible](https://ui.britecore.com/#/en-US/guidelines/principles#) and easy to maintain.
* A process eventually should be created to help manage changes to the system, both from designers and engineers.

{% include image.html alt="ui.britecore.com design system" name="design-system.png" caption="The documentation site for our design system." %}

## Iterative Improvement Over Delayed Perfection
The first, and most important choice we faced with our design system was whether we should build something from the ground up, or base it on something established. Although there were many advantages to creating something new, we ended up basing our initial version on Element-UI, a UI component library built in vue.js.

We had already started using vue.js, so this approach allowed us to stand up a design system in a matter of weeks. This mattered because BriteCore had more than 20 product teams that were all starting to work on new services. Although Element-UI was far from perfect, it was much easier to improve the design system over time than it was to expect all of these teams to rewrite their products once we had created a more ideal design library from scratch.

This approach also allowed us to learn quickly, and focus on areas where we wanted to heavily tailor the experience. A good example of this is how we designed own approach for completing an action on multiple rows in a table.

{% include image.html alt="batch actions on a data table" name="data-table.gif" caption="Our custom table component featured a better way to perform actions on multiple rows of information." %}

## More Than a Component Library
After our design system was initially launched, we added in new functionality that allowed for the publication of guides around UX best practices. This included information on [forms](https://ui.britecore.com/#/en-US/guidelines/data-entry-and-forms), [handling errors](https://ui.britecore.com/#/en-US/guidelines/communicating-system-status) and [typography basics](https://ui.britecore.com/#/en-US/guidelines/typography).

This ensured that we were creating more than just a collection of UI patterns, and it helped inform teams and new designers of how best to use the system. These guides also served as a definitive way to track our official design standards.

{% include image.html alt="Best practices for web forms" name="form-guidelines.png" caption="Guideline articles informed people using the design system of UX best practices." %}

## Keeping a Design System Updated & Relevant
Although the initial release of our design system was successful, I knew it's long-term adoption depended on coming up with a solid process to improve and maintain it. 

My first priority was to make sure all of our designers were invested in it. To do this, we built out the system in a Figma library to make it easy to use in mockups. Then, we tried a few different approaches to manage proposed changes to the system. Ultimately, we settled on using a github project board. This approach also worked well for our developers.

{% include image.html alt="board showing proposed changes in design system" name="github-board.png" caption="Our github project board allowed proposed changes to be tracked over time." %}

As a design system changes, though, it's easy for documentation to get out of date. To avoid this problem, we took a simple approach and made our documentation site the source of truth for our components. So, when developers made changes to the system, they tested them on a local copy of the documentation. By having these updates be tested in the same spot where components were described, it made it much easier to keep everything in sync. 

## Lessons Learned
Thinking carefully about the characteristics important to us in a design system helped us launch a tool that's now used throughout BriteCore. Our design system is easy to maintain, incorporates solid design practices and fosters inter-team collaboration. These attributes are why it's become widely used, and will influence how I think about the best way for any design system to work.
