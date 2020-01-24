---
layout: post
title: "Simpler, better color palettes"
subheader: "A technique using the HSL color model gives more consistent, branded results"
date: "2017-03-28 17:00:00 -0500"
---

A while back, I updated BriteCore's color palette to use a range of gray colors that looked a little closer to our brand's turquoise blue. Before this, our gray colors were simple codes like `#dddddd`, and `#eeeeee`. Easy to remember and enter, but not very related to our brand and action color.

How did I find a new range of grays to use? I opened up dev tools, and played with color picker to find something lighter, more muted, and yet still with a hint of blue. From there, I adjusted to get a sampling of gray colors to use throughout the app.

## HSL to the rescue

What I came up with never felt quite right, and a few weeks ago, I realized I went about this all wrong. That's when I read this piece [Color in UI Design: A (Practical) Framework](https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e).

Be sure to check out the article. It advocated using the Hue, Saturation and Lightness (HSL) as a better way for picking color palettes. With this approach, you leave the hue the same as your main color, but tweak the saturation and lightness.

Using that approach, I was able to tone down the saturation of my main color a bit, and then adjust the brightness to get a range of gray tones.

{% include image.html name="colors.png" caption="Our new gray tones are derived from the primary action's hue" %}

## In the wild

We just released this new set of colors into BriteCore. Overall, it's a pretty subtle change, but it gives the app a more cohesive look, and I really like how easy it is to tweak colors written in HSL versus RGB or hex codes.

## Quick note about sketch

If there is a downside to this approach, it has to be if you are using Sketch. For some reason, the Sketch app uses the [Hue, Saturation, Brightness model](https://en.wikipedia.org/wiki/HSL_and_HSV) (HSB, also called HSV), which sounds similar, but produces pretty different results given the same input. This makes it a pain to setup these colors in sketch, as you have to convert them first.
