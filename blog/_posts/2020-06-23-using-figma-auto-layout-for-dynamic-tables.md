---
layout: post
title: "Using Figma auto-layout for dynamic tables"
date: "2020-06-23 17:00:00 -0500"
---

Like any data-heavy application, we use a lot of tables in our designs at BriteCore, and they're an important part of information-dense designs.

It's always been difficult for us to work with tables in Figma, though, for a few reasons:
* Designers have to detach our table component often in order to add realistic content.
* Once detached, it was easy for styling to become inconsistent across a prototype.

Recently, we updated our design system's table styling, and I took the opportunity to refactor the Figma component. Using auto-layout, I was able to take _most_ of the pain out of prototyping these.

As a result, it's much faster for us to create tables now! I thought I'd share a few lessons I learned along the way, along with a sample file for you to check out.

## Think in columns, not rows
The biggest change I made from our previous component is that I grouped cells into columns, and not rows. We often customize table columns from one design to another, so this was a big cause of detaching instances.

Grouping into columns, and using auto-layout, makes the component much more flexible.

<figure class="c-post__image">
    <iframe src="https://player.vimeo.com/video/432261580?autoplay=1&loop=1&autopause=0&muted=1" width="550" height="268" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <figcaption class="c-post__caption">Column reordering is much easier with Figma auto-layout, as these columns can be reordered by dragging them in the layers panel.</figcaption>
</figure>

## Using simpler components and atoms
By breaking our Figma components up, we were also able to make styling more consistent.

<figure class="c-post__image">
    {% include image.html alt="" name="building-blocks.png" %}
    <figcaption class="c-post__caption">Our table component building blocks, which aren't meant to be overridden.</figcaption>
</figure>

Instead of most of the styling being applied to rows (think of row backgrounds and borders), I applied them directly to the cells. This means if you have to detach a column from it's parent component, the cell styling is still tied back to our design system.

This approach made getting borders right a little tricky. I wanted table cells to snap together easily while also only having 1px-thick borders in most cases. If borders were set inside the frame of the component, then when cells snapped together, the borders were doubled up. The answer was to set borders outside the frame of the component.

<figure class="c-post__image">
    {% include image.html alt="Detail view of component borders" name="borders.png" %}
    <figcaption class="c-post__caption">Extending borders outside the component frame allows the cells to snap together, without borders doubling up as they would if they were inside the frame.</figcaption>
</figure>

## Handling collapsible table rows
In some cases, we use collapsible rows to show more detailed information about a record. To speed up our prototyping process in these cases, I created a special row in our example table, and hid it by default. Once it's shown, it's easy to shift click each cell and then resize them all. Auto-layout does the rest, pushing down the remaining table rows.

<figure class="c-post__image">
    <iframe src="https://player.vimeo.com/video/432261505?autoplay=1&loop=1&autopause=0&muted=1" width="640" height="309" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <figcaption class="c-post__caption">Expandable areas are treated as special table cells, hidden by default.</figcaption>
</figure>

## Putting it all together
Our new components, combined with a few example tables for reference, have already helped speed up our prototyping process. If you'd like to see more about how we accomplished this, and reuse it yourself, here's a [link to a Figma prototype](https://www.figma.com/file/F4owkmoeNc8M69iAGylLyr/Table-Example?node-id=0%3A1) that you're free to use.