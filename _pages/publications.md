---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
jump:
  - ["First-author", "first-author-papers"]
  - ["Co-author", "co-author-papers"]
  - ["Book chapter & white-paper sections", "book-chapter-and-white-paper-sections"]
---

{% include base_path %}
{% assign pubs = site.publications | sort: "date" | reverse %}

<p class="pub-cites">{{ site.data.cv.citations_first }}<br>{{ site.data.cv.citations_total }}. <a href="{{ site.author.ads }}">ADS</a><br>† Student mentored by S. Li.</p>

## First-author papers

### Refereed and submitted
<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "first" %}{% if p.pubtype == "refereed" or p.pubtype == "submitted" %}{% include pub-entry.html p=p %}{% endif %}{% endif %}{% endfor %}
</ol>

### Conference proceedings
<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "first" and p.pubtype == "proceedings" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ol>

## Co-author papers

<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "coauthor" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ol>

## Book chapter and white-paper sections

<ul class="pub-list">
{% for p in pubs %}{% if p.authorship == "other" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ul>
