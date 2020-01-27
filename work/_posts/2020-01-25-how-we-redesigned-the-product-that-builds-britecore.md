---
layout: post
title: "How We Redesigned the Product that Builds BriteCore"
subheader: "BriteCore's rating engine forms the backbone of our application, and defines what information is collected on a quote, and how the system calculates an insurance premium. By recreating this tool to be more flexible, we've greatly expanded the number of companies that can use BriteCore's software."
date: "2020-01-25 09:00:00 -0500"
sidebar: /summary/lines-case-study.markdown
---

<p class="u-text--lg">
    BriteCore began in 2009 as a product built for small mutual insurance companies. This set us apart from other platforms only focused on the largest insurance carriers. Over time, BriteCore grew its client base, but the product still had a fundamental limitation: It only supported property-based insurance, like Homeowners policies. This meant if an insurance company wanted to provide automobile coverage, or something less traditional, like pet insurance, our system couldn’t handle it, or handled it poorly, which led to technical debt and increased support.
</p>

<p>In order for BriteCore to cross over from its initial client base into much wider adoption throughout the insurance industry, we knew it was critical to come up with a way to make our product more flexible. To accomplish this, we began to iterate on a new rating engine.</p>

{% include image.html name="factory.png" caption="When explaining our rating engine tool to other designers, I often compare it to a vehicle factory. We aren't designing the individual vehicles (specific client configurations), we are instead designing the car factory (the tool that creates the configurations). It's a subtle shift in thinking about what we are doing that has large ramifications for how I approached this work. Photo by Amin Khorsand on Unsplash." %}

## How Rating Engines Work
Lines, the rating engine in BriteCore, is a configuration tool for different insurance products (often called Lines of Business). To better understand this, a stripped-down configuration for a homeowners line is below. **"Data"** describes information collected during the quoting process. **"Calculations"** describe how that information affects coverage limits and the policy premium.

```md
# Homeowners
### Data
* Year Built
* Replacement Cost (Cost to rebuild home)
* Roof type (Shingle, Metal, etc.)

### Calculations
Coverage A (Damage to Home)
* Limit (Maximum you can receive in a claim)
    - Matches Replacement Cost

Coverage C (Damage to Personal Property)
* Limit
    - Typically 50% of Replacement Cost

Policy Premium (How much you pay per year)
* 1% of Replacement Cost
```

## Cross-functional Collaboration Highlights Challenges
Most clients rely on BriteCore's own internal team of content analysts to build out product configurations in Lines. We leveraged that expertise to better understand how to solve their problems, and we iterated with them throughout our design process. I also had a chance to work closely with some of BriteCore's most senior engineers, along with our co-founders. They provided, respectively, a depth of technical expertise, and a clear product vision.

{% include image.html name="ideation.png" caption="A discovery session recently conducted by Product Designer Laura Pfancuff illustrates how we've continuously strived to make the entire product team part of our design process." %}

Those different perspectives really highlighted a few key questions:
* Could we use a code editor, instead of a UI-driven approach, to give users more flexibility?
* If we did that, would the user experience suffer?
* How could we provide content analysts with more contextual information, so they can quickly orient themselves when working in a new line?
* When changes are made to a configuration file, how could we make it easier to resolve conflicts?

## The Limitations of a UI
The original Lines interface worked well for almost a decade, and in that time, many different features and options had been added to it to try and support a growing client base. This made for an interface that was hard to understand, and inefficient to use.

{% include image.html name="old-lines-ui.png" caption="The original lines product was heavily UI-based, which made it hard to work in, since many of the visual abstractions were confusing to people working in the system." %}

Shortly before taking on a full redesign of Lines, we added a small code editor component to the existing tool, which let people use a python-based syntax for more complex calculations. This feature was widely used internally, and by our clients, and became an inspiration for us. 

Our hypothesis was, even though a code editor seemed more complex to use on the surface, it would actually remove unnecessary UI abstractions. This would not only improve the user experience, but would also allow us to leverage the flexibility of code to represent new types of insurance data.

## The UX of Code
To prove out this hypothesis, we began building a proof of concept. Our product still had a UI, of course, but most of the key workflows were migrated to a code-based approach. Through close communication with our content analysts we were able to quickly validate our hypothesis &mdash; they were able to start using the tool to build out a real configuration for a client's automobile line. From there, the product grew and was eventually named "BriteLines". In my role as the lead designer, I:
* Collaboratively designed the application's information architecture with our developers
* Created sketches and high-fidelity mockups for pages
* Iterated on our developers' pull requests to improve design consistency
* Conducted [user testing with our content analysts](https://www.youtube.com/watch?v=S-XbCvPX54Q&index=17&list=PLqXiVNlcjuzKMknR_UnJZUwi1N6KPJWsZ)
* Collected feedback to help drive our product roadmap

{% include image.html name="calculations.png" caption="Our modified python syntax in Lines supports many different options, including simple conditional logic, seen above. Lines also interfaces with our rules engine to support more complex business logic and workflows." %}

One of the more challenging aspects of the approach we were using is that we had to consider how to keep our custom code syntax easy to understand. It is [well documented](https://www.developers.britecore.com/products/britelines/#benefits
), but I thought wasn't enough for our content analysts, who were technically minded, but not software developers. By working closely with the project's lead software architect, [Grant McConnaughey](http://www.grantmcconnaughey.com/), we were able to make several improvements to the syntax, including a change that allowed different methods to be called in the same way (Previously, some required the use of quote marks, while others didn't).

## Better Context Improves Users' Confidence
We also wanted to provide people with a way to learn more about a line of business they were editing. This was a pain point both clients and content analysts mentioned. Often, once these configurations are first created, they are only edited once a year, when an insurance company updates its rates. 

Our users said in these scenarios it was sometimes difficult to understand where they needed to go to change something, especially if they didn't set it up initially. Common questions included:
* What does the name of this item mean?
* Where is the data stored that I want to change?
* Where in the configuration setup am I right now?

These questions led us to placing a big emphasis on contextual tooling and wayfinding information in the interface.

{% include image.html name="context.png" caption="To see more information about a data point, a user can highlight the id, and a contextual popover appears, with more information about that field." %}

{% include image.html name="rate-table.png" caption="This shows the detail page for the rate table shown in the previous image. A rate table serves as a lookup for calculations, based on what is chosen during a quote. For example, if 'Protected 2 (P2)' was selected, .99 would be returned and could be used to modify the policy's premium." %}

## Data Mapping - The Most Complex Part of a Complex Product
With a wider range of information users would be storing in Lines, there was a pain point in our existing product that we knew would only get worse, if we didn't address it. It dealt with individual policies that are impacted when a business updates its configuration. A simple example from one of our early planning sessions illustrates the issue.

{% include image.html name="data-mapping-ideation.png" caption="In this situation, an insurance carrier has three options for the type of roof a home can have: Single, Metal or Other. Starting in 2021, they've decided they only want to know if it is a shingle roof or not. So, they remove the 'metal' option form their configuration." %}

This is straightforward enough, but the problem is, what happens to all of the pre-existing insurance policies when they renew, if they have the "Metal" option selected?
* If that data was simply removed, those policies couldn't be rated automatically, and would be cancelled.
* The current system got around this by requiring manual intervention in _every_ case.
* This was an incredibly painful process for our clients, and hindered BriteCore's adoption by larger clients. 

With our new approach, we could accurately predict when these conflicts were going to happen, allowing users to resolve them once, no matter how many policies they had. However, we still had to come up with a workflow for what this would look like.

After iterating on several ideas, we thought resolving these changes at the end of a rating change would be the easiest solution. With that approach in mind, I came up with this prototype for the functionality, which Grant and I presented in person to one of the top 10 largest insurance companies in the U.S., during a sales demo in early 2019.

{% include image.html name="data-mapping-prototype.png" caption="Note: Prototype was modified slightly from what we presented due to an NDA." %}

## A Shift Toward a Dedicated Product Team
Over the past year and a half, the BriteLines product has been used to setup the real rating calculations for one of our clients, and is being used to configure the system for other clients exploring auto insurance. During this time, the product evolved from a POC exploration, to a dedicated piece of BriteCore's platform. This happened while we were scaling up the design team at BriteCore, and I ended up stepping back from the project, with one of our product designers, [Laura Pfancuff](https://www.linkedin.com/in/laurapfancuff/), taking over.

As director of design, I tried to strike a balance with Laura between letting her run with her own design solutions, while also making sure I was providing enough context about the history of the product so she could quickly make an impact. She has been fully embedded on the team for nearly a year now, and has been instrumental in creating workflows and designs for functionality we'd only started to think about at a high level when our redesign originally began. 

{% include image.html name="mapping-final.png" caption="Based on the early prototyping work we did, Laura heavily refined the concept, coming up with an approach that fit much better into the existing Lines product." %}

Seeing that evolution, both on this project, and across everything I've done at BriteCore has been one of the most rewarding parts of my time here, and it's why I value working in a product-centric environment!