---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
title: "Siyang Li"
---

{% include base_path %}

<p class="lede">I am an observational cosmologist working on local measurements of the Hubble constant. I construct independent distance ladders with JWST, HST, and Gaia to test whether the Hubble tension reflects unrecognized systematics or physics beyond ΛCDM.</p>

<p class="lede2">My research focuses on calibrating the tip of the red giant branch (TRGB) and the J-region asymptotic giant branch (JAGB) as precision distance indicators.</p>

{% include home-links.html %}

<h2 id="highlights">Research highlights</h2>
{% include highlights.html %}

<h2 id="news">News</h2>
<ul class="news">{% for n in site.data.news %}<li><span class="when">{{ n.date }}</span> <span>{% if n.url %}<a href="{{ base_path }}{{ n.url }}">{{ n.text }}</a>{% else %}{{ n.text }}{% endif %}</span></li>{% endfor %}</ul>

<h2 id="about">About</h2>

Hello! My name is Siyang (Sean) Li, and I'm currently a Brinson Prize Postdoctoral Fellow at the University of California, Berkeley. I'm interested in observational cosmology and constructing independent routes to measuring the current expansion rate of our universe, the Hubble constant (H0), to investigate the Hubble Tension. 

### My research

During my PhD, I worked with Professor Adam G. Riess in the Supernovae, H0, for the Equation of State of Dark energy (SH0ES) group and analyzed data from the James Webb, Hubble, and Gaia space telescopes to improve standardization of the tip of the red giant branch (TRGB) and J-region Asymptotic Giant Branch (JAGB). These two standardizable candles can be used to construct distance ladders to measure H0 and probe the causes of the Hubble Tension, which is a 5 - 6 sigma difference between local and cosmological measurements of H0. I'm continuing this line of research here at Cal while being hosted by Professor Alex Filippenko in the Department of Astronomy.

### My background

I received my Bachelor of Arts in Physics with high honors from the University of California, Berkeley. There, I built a foundation in instrumentation working with Professor George F. Smoot on developing a silicon photomultiplier camera to search for optical counterparts to fast radio bursts and other astrophysical sub-millisecond transients. To work on this project and collaborate with various researchers, I visited Paris Diderot University in France, Hong Kong University of Science and Technology in China, and Nazarbayev University in Kazakhstan. I also spent a summer working with Professor Shelley Wright and Dr. Jerome Maire in the Pulsed All-sky Near-infrared Optical Search for Extraterrestrial Intelligence group at the University of California, San Diego, to characterize a near-infrared discrete avalanche photodiode 5x5 array that is currently being used to search for extraterrestrial technosignatures and other near-infrared transients.
