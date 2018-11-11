---
title: FB Community Standards - 02

---
# {{page.title}} - Defining the Rules
In publishing the Community Standards, Facebook is trying to create standards that "apply around the world to all types of content. They’re designed to be comprehensive." In order to do this they have tried to make the standards very explicit so that there is little room for interpretation as possible. Let's take a look at one of the standards on [suicide and self-injury](https://www.facebook.com/communitystandards/suicide_self_injury_violence/)

## Translating from written english to pseudocode
Your task is to translate what has been written by Facebook into a set of conditional statements that might be useful to a computer. While we won't be writing actual code that can be executed we will use the syntax of a conditional statement.

### Policy Rationale
Let's start by reading through the "Policy Rationale" and making note of

- any explicit definitions
- any terms that would might need clarification

**NOTE** The intent here is to understand what Facebook is saying. Do not try to make statements or judgements beyond what is explicitly written.

>In an effort to promote a safe environment on Facebook, we remove content that encourages suicide or self-injury, including real-time depictions that might lead others to engage in similar behavior. Self-injury is defined as the intentional and direct injuring of the body, including self-mutilation and eating disorders We want Facebook to be a space where people can share their experiences, raise awareness about these issues, and support each other through difficult experiences, and so we allow people to discuss suicide and self-injury. We encourage people to offer and to seek support from one another in connection with these difficult topics.

In this paragraph there is an explicit definition: "Self-injury is defined as the intentional and direct injuring of the body, including self-mutilation and eating disorders." We could write this as: <br>
`var self-injury = the intentional && direct injuring of the body, including self-mutilation && eating disorders.`

notice the use of the logical operator `&&` in place of the word and

>We work with organizations around the world to provide assistance to people in distress. We also talk with experts in suicide and self-injury to help inform our policies and enforcement. For example, we have been advised by experts that we should not remove live videos of self-harm while there is an opportunity for loved ones and authorities to provide help or resources.

>We remove any content that identifies and negatively targets victims or survivors of self-injury or suicide seriously, humorously, or rhetorically. People can, however, share information about self-injury and suicide to draw attention to the issue and allow for discussion so long as they do not promote or encourage self-injury or suicide.

terms that may need more clarification
- _people in distress_ - what constitutes distress?
- _opportunity...to provide help or resources_ - what defines an opportunity?
- _humorously_ - how can we define what is humorous and what is not?

### Rewriting the standards
Next, let's look at the standard itself.
<hr>
Do not post:
Content that promotes, encourages, coordinates, or provides instructions for
- Suicide
- Self-injury
- Eating disorders

Content about self-injury that contains promotional slogans without clear, anti- self-injury disclaimers

Except in limited situations of newsworthiness, it is against our policies to post content depicting a person who engaged in a suicide attempt or death by suicide
<hr>
Let's dissect this and rewrite it as pseudocode (please ignore the syntax highlighting. That is done automatically by the website)
```
if(content ==
  (promotes || encourages || coordinates || provides)
  instruction for
  (suicide || self-injury || eating disorders)){
    remove();
} else if(content ==
  about self-injury &&
  contains promotional slogans &&
  !(contain clear, anti-self-injury disclaimers)){
      remove();
} else if(content ==
  contains content depicting a person who is engaged in
  (a suicide attempt || death by suicide)&&
  !newsworthy){
    remove();
} else {
  accept();
}
```
I'd also like to make note of the term "newsworthiness." How is this defined? Let's add it to our list of terms from above.

There are 2 more sections in the community standard on suicide and self-injury. While I won't go through each of these sections in detail the process is the same.

## [Assignment](https://classroom.google.com/u/1/c/MTU5OTI3MjEzNTZa/a/MjYyNDM1NjMwNzNa/details)
Create a [new Google Doc](https://docs.google.com/document/d/1Yw7b5AZBsyspFYgOgSHaUDCZ8Rbs2o_O3hisWyanhOQ/copy) for this Assignment

Choose one of the standards from [Part 1 - Violence and Criminal Behavior](https://www.facebook.com/communitystandards/violence_criminal_behavior)
1. Credible Violence
2. Dangerous Individuals and Organizations
3. Promoting or Publicizing Crime
4. Coordinating Harm
5. Regulated Goods

Make note of which policy you have chosen and copy and paste the full text of the standard at the bottom of your page.

Read through the Policy Rationale and note at the top of your page of:
- any explicit definitions by declaring a variable and assigning to it the definition as above
- any terms that you believe would benefit from further explanation.

Read through the posting rules in the standards. Below the terms that need clarification:
- translate the written words into pseudocode as above
- Use comparators (`<,>,==` etc.) and logic operators (`&&, ||, !`) for maximum clarification
- Make note of any additional terms that need clarification
