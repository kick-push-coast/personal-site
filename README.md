# Howdy!

My name is Mike Tyler and this site serves as my personal CV. It's a teeny tiny modern Angular app with some fun stuff sprinkled here and there.


## What to expect:

* A brief summary of my professional experience and education
* Fun with CSS/JavaScript including animations and an Easter egg or two
* Some small interaction with an external API
* Code that reflects my general approach to building a scalable SPA


## What not to expect:

* **Perfection!** I'm in the process of JS framework-ifying my three year old existing site. There are stil some key things missing (most notably: tests).
* **A specific employment history**. That can be found in my [LinkedIn](https://www.linkedin.com/in/michael-tyler-569159147/) (or my resume, if I provided one for you).
* **A full portfolio of my work**. I have been working in a proprietary codebase for the past three years, so much of my code and design work unfortunately can't be shown here.


## Methodologies

Although this project is small, the code structure reflects some of my preferred methodologies for building and maintaining a scalable app:

### Store pattern

This project uses stores to maintain and manipulate state so that state management is hidden away from components.

### Repository pattern

This project also uses the repository pattern to abstract away all communication with external data sources from the view and service layers.

### CSS utilities

CSS is organized into global utilities that represent a general style rule and not any particular HTML element or component. These utilities are applied to the view to build up component styles. 

**Note,** there are a few places where you'll see BEM style css writing that is carried over from my old site:

* The user-header component
* The footer layout component
* The dot-game component


## Roadmap

As mentioned, I'm still making improvements and plan to address the following missing pieces:

* Unit testing
* Refactoring css from old site
* Creating Angular component/service for dot game logic (currently, this is hosted in an external JS file)
* Accessibility improvements
