---
permalink: /
layout: home
redirect_from: 
  - /about/
  - /about.html
title: "Siyang Li"
tab_title: "Siyang Li - Cosmologist"
lede: "I am an observational cosmologist working on local measurements of the Hubble constant. I construct independent distance ladders with JWST, HST, and Gaia to test whether the Hubble tension reflects unrecognized systematics or physics beyond ΛCDM."
lede2: "My research focuses on calibrating the tip of the red giant branch (TRGB) and the J-region asymptotic giant branch (JAGB) as precision distance indicators."
lede3: "JWST TRGB and JAGB distances agree with HST Cepheids within 0.03 mag; all 35 Type Ia supernovae with HST or JWST TRGB distances give H₀ = 72.1–73.3 ± 1.8 km/s/Mpc; my CHASE spectra show 76% of stars in the JAGB color selection are not carbon stars."
---

{% include base_path %}

<p class="leads"><span class="leads-label">Programs I lead</span>
<span class="lead-row"><strong>PI:</strong> <a href="{{ base_path }}/research/#observing-programs">CHASE carbon-star survey (Lick 3 m, APO 3.5 m)</a> <span class="nw">· <a href="{{ base_path }}/research/#observing-programs">HST GO-17911 (8 orbits)</a></span></span>
<span class="lead-row"><strong>Lead organizer:</strong> CosmoVerse Data Challenge &amp; School (77 registrants, 31 countries)</span>
<span class="lead-row"><strong>Research mentor:</strong> <a href="{{ base_path }}/teaching/#mentoring">6 students in 2026, 4 of them co-authors on CHASE I</a></span>
<span class="lead-row lead-more"><a href="{{ base_path }}/research/#future-directions">Future directions →</a></span></p>

<div class="home-cols">
<section class="col-main">
<h2 id="highlights">Research highlights</h2>
{% include highlights.html %}
</section>
<aside class="col-side">
<h2 id="news">News</h2>
<ul class="news">{% for n in site.data.news %}<li><span class="when">{{ n.date }}</span> <span>{% if n.url %}<a href="{{ base_path }}{{ n.url }}">{{ n.text }}</a>{% else %}{{ n.text }}{% endif %}</span></li>{% endfor %}</ul>
</aside>
</div>

## About {#about}

Hello! My name is Siyang (Sean) Li, and I'm currently a Brinson Prize Postdoctoral Fellow at the University of California, Berkeley. I'm interested in observational cosmology and constructing independent routes to measuring the current expansion rate of our universe, the Hubble constant (H<sub>0</sub>), to investigate the Hubble Tension. 

### My research

During my PhD, I worked with Professor Adam G. Riess in the Supernovae, H<sub>0</sub>, for the Equation of State of Dark energy (SH0ES) group and analyzed data from the James Webb, Hubble, and Gaia space telescopes to improve standardization of the tip of the red giant branch (TRGB) and J-region Asymptotic Giant Branch (JAGB). These two standardizable candles can be used to construct distance ladders to measure H<sub>0</sub> and probe the causes of the Hubble Tension, which is a 5–6σ difference between local and cosmological measurements of H<sub>0</sub>. I'm continuing this line of research here at Cal while being hosted by Professor Alexei V. Filippenko in the Department of Astronomy.
