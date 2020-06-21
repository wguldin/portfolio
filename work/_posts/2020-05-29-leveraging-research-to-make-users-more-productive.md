---
layout: post
title: "Leveraging Research to Make Users More Productive"
subheader: "...."
date: "2020-05-29 04:00:00 -0500"
sidebar: /summary/billing-case-study.markdown
type: "design"
order: 1
hideFromSearchResults: true
---

<p class="u-text--lg">The billing page in BriteCore is where our users go first when they need to answer a customer’s question about their insurance bill. Even though it's one of the most used pages in the application, it hadn't changed much since BriteCore launched in 2012.</p>

Existing research we'd done with customers showed the page had major pain points, but it wasn't on our product roadmap to rebuild. So, I proposed that we use BriteCore's new design system to update the page. Once this new version launched, we leveraged a mixture of analytics and user research to iteratively improve the experience.

<a href="#final-prototype--results" class="button mt1">Jump to final prototype & results</a>

## An Overview of our Process

<figure class="c-post__image">
    {% include image.html alt="process diagram" name="process.png" %}
    <figcaption class="c-post__caption">For this project, we focused on leveraging research throughout the design process.</figcaption>
</figure>

### Hypothesis Creation
At the outset of this project, we knew we didn't have the resources to dramatically change our system's billing logic. Our hypothesis instead was that: **1)** The billing page was a large pain point for our customers and **2)** Many of these issues could be solved with a better user experience. 

### Initial Validation
We based this hypothesis on research done with one client's billing department. They were just starting to roll out BriteCore, and said these issues might hurt their adoption of the system. We wanted to help them, but also wanted to better understand first if these issues were universal, or unique to this one client.

To find this out, we conducted a series of interviews and contextual inquiries with other clients. This research confirmed our hypothesis &mdash; the problems people were experiencing were shared, and they could be traced back to a poor user experience. 

<figure class="c-post__image">
    {% include image.html alt="initial research results" name="initial-research-results.png" %}
    <figcaption class="c-post__caption">Working with our UX Researcher, Maya Carroll, we collaboratively analyzed our initial research using an affinity diagram to group shared data points.</figcaption>
</figure>

### Research Findings
A few key pain points emerged from this work:

#### Future Invoices
For people using this part of BriteCore, one of their main tasks is to answer questions customers might have about their latest bill. But finding the right bill could be difficult because BriteCore displayed the latest invoice in a table alongside other invoices that hadn't been billed yet. 

This meant someone on the phone with a policyholder had to first find the invoice the customer was discussing. Sometimes, there could be up to 10-12 future invoices, if the policy was billed monthly.

<figure class="c-post__image">
    {% include image.html alt="initial research results" name="future-invoices.png" %}
    <figcaption class="c-post__caption">To answer a customer's question about their most recent bill, CSRs would often have to find the first invoice that didn't have a date in the future, which was a painful process while they were on the phone.</figcaption>
</figure>

####  Payment Workflow Efficiency 
In addition to answering questions, this page is often used to make manual payments on a policy for a customer. The payment form was linked from this page, but it had to be completed in another part of the application. As a result, contextual information about the customer's  bill, like how much was currently due, didn't carry over, requiring the user to go back and forth between these two pages.

<figure class="c-post__image">
    {% include image.html alt="Make payment example" name="make-payment.png" %}
    <figcaption class="c-post__caption">The "Make Payment" button in the bottom right led to another page, where the amount due on the policy had to be re-entered. This header also shows two of the multiple date range filters on the page, which users found confusing.</figcaption>
</figure>

#### Voiding Payments
Under certain circumstances, invoices can be voided. Our research showed that our users wanted to be able to do this for payments as well. This feature request was out of scope for us, but we were able to influence the product team's overall billing roadmap, and this was recently released.

### Accountant Persona
We were also able to create from our findings an initial 'proto-persona' to represent the users of this page.

<figure class="c-post__image">
    {% include image.html alt="Accountant Proto Persona" name="proto-persona.png" width="275" %}
    <figcaption class="c-post__caption">As we gathered our initial research, we created a proto-persona of an accountant user to help guide our decision-making. Keeping the persona less refined upfront allowed us to frequently revisit our assumptions about our users.</figcaption>
</figure>

## Prototype and Initial Release
Based on this research, we decided to go ahead with updating the page, and tried to solve many of the problems our users experienced:
* Future invoices were hidden by default, with the ability to show them using a checkbox.
* The payment form was updated to prefill common payment amounts, such as 'total due'.
* The entire page was updated to use our new design system.

Another designer on my team, Allison Berels, worked on this initial mockup, with both of us collaborating through the process.


<figure class="c-post__image">
    {% include image.html alt="First Version of New Page" name="first-version.png" width="425" %}
    <figcaption class="c-post__caption">The first version of the page we released used BriteCore's design system. We later learned that the larger base font size of the page made it harder for users to navigate.</figcaption>
</figure>

## Embracing Critical Feedback
Initial prototype testing went well, but after we released the page, we learned clients were having issues. Some of this related to an important feature that hadn't been carried over to the new design. I was able to use these comments to convince the product owner that it should be added back.

The other common feedback, though, was related to the length of the page. Generally, our users prefer compact designs and are used to legacy systems where dozens of pieces of information are displayed on a single screen. 

<figure class="c-post__quote">
    <blockquote>&ldquo;Not happy with the new billing page, have to scroll too much to see everything.&rdquo;</blockquote>
    <figcaption>Feedback we recieved in a customer survey shortly after launch.</figcaption>
</figure>

The cause of this additional scrolling was our new design system, which uses a base 16px font size. Changing this wasn't something I wanted to consider, for several reasons:
* More than 90% of our users are on desktop, and when sitting further from a screen, a [larger font size becomes more important](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/).
* BriteCore's ease of use is a market differentiator for us, and embracing UX best practices is a critical piece of this.
* We didn't think making the page visually more compact would really address the underlying issue.

Instead of doing this, we launched a follow-up research study to better understand the way people were using the new page. 

## Leveraging Analytics to Inform Product Decisions
Around the time we launched the initial version of the page, we also added a new analytics platform to BriteCore called Pendo. This tool augmented our more qualitative user research in several important ways.

### Participant Recruitment
First, we were able to reach out directly to people who were choosing to use the older version of the page. This allowed us to focus our usability testing on those experiencing the most friction with the new design. 

### Feature Usage
Second, we were able to use Pendo's heatmaps and usage statistics to better evaluate how the page was being used. This proved invaluable in helping convince the product team to make further changes to the layout. 

<figure class="c-post__image">
    {% include image.html alt="Pendo usage heatmap" name="pendo-heatmap.png" %}
    <figcaption class="c-post__caption">Pendo's heatmap view, showing more user activity in warmer colors. This information, along with our qualitative research helped drive our iterative updates to the design.</figcaption>
</figure>

## Synthesizing Research into Real Insights
Throughout the research process at BriteCore, we try to include our product team counter-parts as much as possible. For this project, this meant the product owner joined most of our usability tests, and observed or helped take notes. 

Afterwards, we included her and the product manager in a collaborative research session to jointly analyze the findings. 

Some key takeaways:
* The page itself scored well on usability, with a 95% task completion rate, on average.
* Our interviews highlighted a few workflows that could be made more efficient through a better layout. 
* Analyzing Pendo results also showed how we could better focus the page on the most commonly used features.

<figure class="c-post__image">
    {% include image.html alt="Results from our collaborative research workshops" name="research-workshop.png" %}
    <figcaption class="c-post__caption">Working with our UX Researcher, we ran a collaborative research workshop, where we analyzed results collaboratively with the product team and other designers. Including our product team in the research process helped create buy in for many of our findings.</figcaption>
</figure>

## Incorporating our Research Insights
After collecting these findings, I prototyped a new layout and design for the page, working closely with the product team and engineers.

### Redesigned Header
Based on analytics data, we thought the header could be simplified, and we also wanted to make it more compact, to address qualitative feedback. I'm hopeful that this type of header will become a standard component for other detail pages in BriteCore.

<figure class="c-post__image">
    {% include image.html alt="Redesigned Header" name="header.png" %}
    <figcaption class="c-post__caption">The 'actions' in the original header were not widely used, so we moved them from here, and were able to make the header more compact and standardized.</figcaption>
</figure>

### Updated Page Hierarchy
One of the other key findings from our research was that the page could be organized in a more efficient way for our users. 

Although the product team was involved closely in our research, they felt larger layout changes were unnecessary. By talking them through my thought process, I was able to come up with a solution where we consolidated less used information, in order to move up the highly used "Balance Due" summary.

We also split the page into two tabs, to better separate billing setup details from the overview information.

<figure class="c-post__image">
    {% include image.html alt="An annotated prototype" name="annotation.png" %}
    <figcaption class="c-post__caption">Through close collaboration, we were able to make the "Balance Due" summary more prominent. I used these custom annotations to better explain my design rationale in context, which was more convincing for the product team than a standard Figma prototype.</figcaption>
</figure>

### Simplified Account History
Our analytics analysis also showed that users weren't using many of the filtering and search tools on our account history table. After further discussion with the product team, we also decided that in many cases it didn't make sense to sort or filter against all of these fields. This led to a more streamlined design for this part of the page.

<figure class="c-post__image">
    {% include image.html alt="Simplified Account History" name="ah_history.png" %}
    <figcaption class="c-post__caption">We were able to remove several date range filters and sorting functionality from this table, simplifying and focusing the user experience.</figcaption>
</figure>

## Final Prototype & Results
The culmination of all our changes can be seen in this Figma prototype, and they are being released to our clients in early July. Once released, we will monitor the number of times users are returning to the old version of the page, in order to gauge whether or not we've solved some of the initial problems with the redesign.


<figure class="c-post__image">
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCSMwGusQEJRzVrTBqOgMUV%2FBriteCore-Billing-Page-Redesign%3Fnode-id%3D2505%253A556%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowfullscreen></iframe>
    <figcaption class="c-post__caption"></figcaption>
</figure>


For me, this project reinforced the value of shipping iterative improvements to a user experience. It also helped us show our product team how design research plays a valuable role in the product process.