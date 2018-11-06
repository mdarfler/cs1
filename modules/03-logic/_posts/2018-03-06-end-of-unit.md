---
title: End of Unit
note: Do something about facebook policy. Make decisions about hate speech with conditional logic.
---
# {{page.title}} - Defining Hate Speech
In April of 2018, Facebook released its internal [Community Standards](https://www.facebook.com/communitystandards/) with the goal to "encourage expression and create a safe environment." The Standards are based on the policies of Safety, Voice, and Equality and outline 6 broad areas of objectionable content with 23 subcategories and numerous sub-sub categories. As is befitting of a tech company, the "Standards apply around the world to all types of content. They’re designed to be comprehensive."

## Setting the Stage.

Please read this article from NPR entitled [Facebook Updates Community Standards, Expands Appeals Process](https://www.npr.org/2018/04/24/605107093/facebook-updates-community-standards-expands-appeals-process)

Answer the following question:
- Why do you think Facebook decided to publish their internal standards?
- How do the current standards differ from the previous community standards?
- The author mentions that much of the decision making on what constitutes a violation of the community standards is done by "subcontractors who are stationed in distant countries and asked to review large quantities of posts every shift."
  - How might this decision on the part of Facebook adversely effect the fair enforcement of their standards?
  - In what ways could the review process be modified in order to improve the fair enforcement of standards?
-

<iframe src="https://www.npr.org/player/embed/605107093/605176194" width="100%" height="290" frameborder="0" scrolling="no" title="NPR embedded audio player"></iframe>

<embed src="https://poseidon01.ssrn.com/delivery.php?ID=824100098007120010103031076016006090038051063013063017078065110109100085112123080065039020017097126100053083023076019065069077045032091044031104085024126113031119021002039027019123089064095003121127071127074111102127030094072079000122098095021093110&EXT=pdf" type="application/pdf" width="100%" height="800px" />

```
if (content is about another private individual && reflects(claims about sexual activity ||
		high - severity physical descriptions || (Ranking individuals on physical appearance || personality) ||
		threats of non - consensual sexual touching ||
		Sexualized text targeting another individuals ||
		An individual in a context that is intended to degrade ||
		Physical bullying where the context further degrades the individuals ||
		Comparisons to animals that are culturally perceived as(intellectually || physically inferior) to an inanimate object)) {
	remove();
} else {
	keep();
}
```
