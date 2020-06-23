---
layout: post
title: "Spreadsheet sparklines for OKR tracking"
date: "2020-01-20 17:00:00 -0500"
---

Recently at BriteCore, we've started to track quarterly goals using the Objectives and Key Results framework popularized by [John Doerr](https://www.whatmatters.com/). So far, it's been a helpful way to provide focus across our organization, and has helped me show my team how their efforts tie into what our company is trying to accomplish overall. 

We started tracking OKRs in the fall, using google docs to record them. However, we weren't doing a great job following up on the status of the KRs, which is critical to the success of each objective. With the start of the new year, we've recommitted to tracking our progress, and debated whether we needed a specific tool for this. 

I thought it'd be best to avoid adding another piece of software to the mix, and instead put together [a prototype using Google Sheets](https://docs.google.com/spreadsheets/d/1RoaLK-YtbjW2t--lBZTVPREQYCI5-0YefFKzYZ9r3uU/edit?usp=sharing){:target="_blank"}.

{% include image.html alt="OKR Tracking" name="okr-tracker.png" width=400 caption="The OKR tracker paired a percentage with a status to better capture the state of each KR." %}

To visually show the progress here, I used a charting technique called sparklines. [Edward Tufte's](www.edwardtufte.com/) coined the term to describe small, informative charts that can be paired with text. I first learned about his work studying infographics in Journalism school. You'll often see sparklines in stock listings, and in an interesting example, he showed how they could be used for medical charts.

<figure class="c-post__image">
    {% include image.html alt="sparklines example from Edward Tufte" name="tufte-sparklines.png" remove-class="true" %}
    <figcaption class="c-post__caption">Sparklines allow for much easier visual comparisons than text-based listings alone. <a href="https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR" target="_Blank">Source</a></figcaption>
</figure>

When working on this OKR Tracker, I thought it'd be cool to use small bar charts as a kind of simple sparkline, to show progress. It turns out this is an available feature in Google Sheets!


Here's what I ended up using, but there's [a lot more you can do with these in a google sheet](https://support.google.com/docs/answer/3093289?hl=en). I based the status colors on BriteCore's [design system](https://ui.britecore.com/#/en-US/guidelines/color#validation-colors), for a little extra branding emphasis as well.
```
=SPARKLINE(
    C2,
    {   "charttype", "bar";
        "max", 1;
        "color1",
            ifs(
                E2 = "on track", "#2d7148",
                E2 = "at risk", "#b3521a",
                E2 = "failing", "#b43131",
                E2 = "complete", "#08859b",
                E2 = "on hold", "#cccccc"
            )
    }
)
```

In the end, we ended up adopting this sheets-based template for all of our OKR Tracking across BriteCore.