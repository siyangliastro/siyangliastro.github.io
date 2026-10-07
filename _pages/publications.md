---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% assign pubs = site.publications | sort: "date" | reverse %}

## First-author papers

### Refereed
<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "first" and p.pubtype == "refereed" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ol>

### Conference proceedings
<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "first" and p.pubtype == "proceedings" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ol>

## Co-author papers

<ol class="pub-list" reversed>
{% for p in pubs %}{% if p.authorship == "coauthor" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ol>

## Book chapter and white papers

<ul class="pub-list">
{% for p in pubs %}{% if p.authorship == "other" %}{% include pub-entry.html p=p %}{% endif %}{% endfor %}
</ul>
