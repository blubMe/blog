---
date: "2018-09-18"
title: "Graphql is Love"
tags: ['js','programming','react']
---
Managing font families and weights shouldn't be a big deal. Add the font family to the body tag, and define the font weights on the individual titles.

However, when dealing with some web font providers (looking at you fonts.com!), you might find that different font weights require entirely seperate font families. For example the DIN Next family is provided as two fonts. One for the light, medium, and bold weights, and another for the regular weight.

How to work with this
The way that we solved this at Pusher, is to use Sass's placeholder classes. These allow us to define multiple CSS properties with just one line. Think of them as multiline variables.

The Old Way
