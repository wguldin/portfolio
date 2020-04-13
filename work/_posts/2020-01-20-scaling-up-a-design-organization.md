---
layout: post
title: "Scaling Up a Remote Design Organization"
subheader: "BriteCore, a fully remote and distributed company, had been without a designer for three years when I joined the team. Starting out as the only designer on staff, I built up a design culture within the company, and scaled up our design team as we grew. Along the way we started a UX research program, design system and a new frontend engineering team."
date: "2020-01-20 11:05:37 -0500"
sidebar: /summary/scaling-case-study.markdown
order: 1
---

<p class="u-text--lg">BriteCore, a fully remote and distributed company, had been without a designer for three years when I joined the team. This meant features were routinely shipped without any kind of validation or feedback from customers using our insurance software, and that basic practices in product design, such as information architecture mapping and wireframing weren’t in place.</p>

<figure class="c-post__image">
    {% include image.html alt="sticky notes used in ideation session" name="ideation.png" remove-class="true" %}
    <figcaption class="c-post__caption">Ideation session our team ran for dozens of BriteCore employees during an in-person product summit. We used the sessions to raise design literacy on our teams, and created a <a class="c-post__caption-link js-download" download href="/pd-summit-design-session.pdf" target="_blank">summary of the session</a> we shared out over slack. We now routinely conduct these activities remotely, using Miro.</figcaption>
</figure>


## Laying the Foundation
It would be another two years before BriteCore was able to scale its design team. This allowed me to create and grow a true design process within the organization:

* Routinely conducted usability tests and interviews with our users, sharing these results with our team.
* Worked closely with development teams on several projects, including a rewritten quoting experience.
* Instituted design reviews of all other new functionality, explaining design best practices in the process, and encouraging early design involvement.
* Gave annual [presentations](/talks/) on our design and product at BriteCon, our users  conference.

Over several months, I noticed that these efforts bore fruit. Instead of hearing about in-progress work as it neared completion, I was able to insert design much earlier in the process, leading to consistently better experiences for our users.

## Leveraging an Engineering Culture
From its beginning, BriteCore has embodied an engineering-centric culture. One reason why I believe I’ve been successful in my role is that before moving towards product design, I was a self-taught web designer, using HTML, CSS, and JavaScript to build out features at MidwayUSA, an e-commerce company. 

I brought these skills to BriteCore and was able to implement many changes to the application myself to improve visual consistency and user experience. These included:
* Creation of first ‘shared’ set of styling to define standard buttons, form elements, and other components, all with UX best practices built-in.
* Added search ‘hotkeys’ to enable quicker task completion for people working in the system.
* Unified navigation across the application, both increasing consistency and reducing technical debt.

{% include image.html alt="wguldin github contribution graph" name="gh-contributions.png" caption="Code contributions are far from a perfect measurement of impact, but they do illustrate how early on it fell to me to implement many general improvements to the platform myself." %}

Although I no longer code directly much anymore, this technical background has been invaluable to help me understand how our product is built, and it helps me closely collaborate with developers. Building those relationships, and understanding developers’ work is key to getting a design vision implemented, and being able to iterate on a product quickly. (I’ve also had the chance to give a [tech talk on CSS architecture](/talks/), which was pretty cool!)

## Creating a Design Organization
{% include image.html alt="initial structure of britecore's design team" name="structure-1.png" caption="The initial structure of BriteCore's design team, once we began scaling up. Product designers were embedded on agile teams, which gave them a better understanding of their problem space." %}

Into my second year at BriteCore, we began a large effort to rewrite key pieces of the application. Our product vision was to create a more flexible platform that could support more types of insurance using better configuration tools and less custom code. Given the complexity of our product suite, and based on industry guidance (Org Design for Design Orgs was particularly helpful), I set out to create an ‘embedded’ model for design at BriteCore. 

In this approach, designers become an integrated part of each product team, attending team meetings and driving shared understanding of what is being built and why. This approach has several advantages:
* Designers are seen as full team members instead of an external resource.
* Designers build up a better understanding of the product, and make more informed design choices.
* The team tends to respect the expertise of the designer more, and ensures they are part of the decision-making process.

This shows how we structured the design department at BriteCore initially, with myself in the Product Design Director role. We have 8 designers now embedded on teams across our product organization.

## Making UX Research a Priority
As our new product teams began to form, this model worked well, although we had a hard time coordinating and organizing user research as the team grew. Everyone wanted to make research a consistent priority, but it was failing to happen. Most of our research was also limited to primarily usability testing, and other similar evaluative techniques. Over time, leading teams, I’ve found that if a responsibility is shared among many individuals, it is easy for it to slip given competing priorities. It felt like this is what was happening with UX research, and I also thought we might benefit from more specialized expertise in this area. 

With that in mind, I proposed bringing on a dedicated UX Researcher, and we ultimately hired <a href="https://www.mayacarroll.com/" target="_blank">Maya Carroll</a>, who has been a great fit for our team. Working with her, and the rest of the designers, we were able to greatly increase the amount of customer interactions our team had:

* We conducted more than 180 research sessions in our first year.
* Went onsite to multiple clients, observing not only how they use BriteCore, but how it fit into their overall work processes.
* Developed personas based on these interactions used by the entire organization.
* Kept designers and product managers involved in the research process, through collaborative note taking, observation and analysis of key results.
* These research efforts helped us insert design earlier into our product process, resulting in better 

{% include image.html alt="Persona for underwriters" name="underwriter-persona.png" caption="Our proto personas were created to help guide our research process, and improve design literacy across the organization." %}

{% include image.html alt="Journey map for BriteCore's users" name="persona-journey-map.png" caption="We also created a journey map to show how these different personas interacted while using our platform." %}


## Implementing a Design System
While building out our design team, it was also clear to me that we need help to close the gap in how our work made it into the live application, and to realize our vision of a shared design system for BriteCore. I’ll go into detail about this project in another case study, but in terms of scaling our team, this meant proposing that Design includes a place for UI Engineering, a concept inspired by Optimizely.

Once we had a UI Engineer on staff, we were able to quickly setup a shared design system, and this effort worked well enough, we were able to make a case for scaling this into an entire frontend product team dedicated to creating an excellent, consistent user experience across 25+ product team

{% include image.html alt="Revised team structure" name="structure-2.png" caption="In this cross-functional model, our UX Researcher and Frontend team were able to help our designers implement design & research best practices." %}

This team was also able to:

* Leveraged our design system to rewrite legacy pieces of BriteCore's UI.
* Guided other product teams in frontend best practices, and provided consistent tooling.
* Deployed multiple performance improvements for end users.
* Improved other teams' productivity by reducing UI hot reload time during development by 50%.

While designers remained embedded on agile teams, our dedicated UX Researcher and our frontend team worked with all of our teams across the organization.

## Lessons Learned
Building BriteCore’s design team from just myself to a department of 14 people has been an incredibly rewarding and challenging experience. Along the way, I’ve learned how to lead remote teams and learned a lot about being a better designer from the people I’ve been lucky enough to work alongside.
