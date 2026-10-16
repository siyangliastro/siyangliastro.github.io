---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
jump:
  - ["Future directions", "future-directions"]
  - ["Observing programs", "observing-programs"]
  - ["JAGB", "jagb"]
  - ["TRGB", "trgb"]
  - ["Hubble constant", "h0"]
  - ["Instrumentation", "instrumentation"]
---

{% include base_path %}

## Future directions

**Standardizing the JAGB with spectroscopy.** Continuing the CHASE spectroscopic survey of carbon stars, we will determine how chemistry, carbon-star subtype and variability shape the JAGB luminosity function. The goal is to turn the JAGB into a standardized candle that extends the distance ladder beyond the reach of Cepheids, testing the Hubble tension at distances not yet probed.

**Variable stars in the time-domain era.** Using PRIME and the Rubin Observatory's LSST, we will search for and characterize long-period variables and Miras, including the variability of JAGB stars themselves. This work prepares directly for the Roman Galactic Bulge Time-Domain Survey and the JASMINE astrometric mission.

**Independent distance ladders with Roman.** Roman's wide field will capture entire stellar halos of nearby galaxies in a single pointing. This will let us map how the TRGB varies with contrast ratio and stellar population across complete halos, and calibrate the color dependence of the near-infrared TRGB in Roman's own filters. Together with the JAGB, these measurements will build distance ladders that are independent of Cepheids.

**Open, accessible H0 measurements.** Building on the CosmoVerse Data Challenge, we will develop shared datasets, blinded analysis challenges and public tools that let more of the community, including students, reproduce and test local measurements of the Hubble constant.

## Observing programs

Telescope time from the [CV]({{ base_path }}{{ site.data.cv.pdf }}).

<ul class="cv-list">{% for e in site.data.cv.telescope %}<li><span>{{ e.note }}. <em>{{ e.title }}</em>.{% if e.chase %} Data for the CHASE spectral survey.{% endif %}</span></li>{% endfor %}</ul>

{% assign pubs = site.publications | sort: "date" | reverse %}
{% assign themes = "jagb|J-region asymptotic giant branch (JAGB)|jagb.jpg|Li et al. 2024, ApJ|JAGB;trgb|Tip of the red giant branch (TRGB)|trgb.jpg|Li et al. 2023, ApJ|TRGB;h0|The Hubble constant and the distance ladder|h0.jpg|Li et al. 2025, ApJ|Hubble constant;instrumentation|Instrumentation| | |instrumentation" | split: ";" %}
{% for t in themes %}{% assign f = t | split: "|" %}
<section class="theme" id="{{ f[0] }}">
<h2>{{ f[1] }}</h2>
{% assign fig = f[2] | strip %}{% if fig != "" %}<figure class="theme-fig"><img src="{{ base_path }}/images/highlights/{{ f[2] }}" alt="Figure from {{ f[3] }}" loading="lazy"><figcaption>{{ f[3] }}</figcaption></figure>{% endif %}
{% assign tp = "" | split: "" %}{% assign tq = "" | split: "" %}{% for p in pubs %}{% if p.themes contains f[0] %}{% if p.authorship == "first" %}{% assign tp = tp | push: p %}{% else %}{% assign tq = tq | push: p %}{% endif %}{% endif %}{% endfor %}{% assign tp = tp | concat: tq %}
<ul class="pub-list">
{% for p in tp limit: 2 %}{% include pub-entry.html p=p %}{% endfor %}
</ul>
{% if tp.size > 2 %}<details class="more-pubs"><summary>{{ tp.size | minus: 2 }} more {{ f[4] }} papers</summary>
<ul class="pub-list">
{% for p in tp offset: 2 %}{% include pub-entry.html p=p %}{% endfor %}
</ul>
</details>{% endif %}
{% assign stu = tp | where_exp: "x", "x.students" %}{% if stu.size > 0 %}<p class="pub-note">† Student mentored by S. Li.</p>{% endif %}
</section>
{% endfor %}
