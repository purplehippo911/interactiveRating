# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
Desktop:

![Desktop](screenshot/dekstop.png)

Mobile:

![Mobile](screenshot/mobile.png)



### Links

- Solution URL: [My solution](https://your-solution-url.com)
- Live Site URL: [My live site](https://github.com/purplehippo911/interactiveRating)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla JS
- CSS custom properties
- Flexbox

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
****
To see how you can add code snippets, see below:

```html
     <dialog id="dialog">
        <img src="images/illustration-thank-you.svg" />
        <h2>
          You selected
          <span id="rate"></span>
          out of five.
        </h2>
        <h1>Thank you!</h1>
        <p id="dialog_info">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </dialog>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts **you**'re still not completely comfortable with or techniques you found useful that you want **to** refine and perfect.


### Useful resources

- [popup modal by Kevin Powell](https://www.youtube.com/watch?v=TAB_v6yBXIE&t=436s&ab_channel=KevinPowell) - This helped me with the popup. I really found the `<dialog>` element interesting, because I could just add the popup content to a `<dialog>` element.
- 
- [ What the flexbox](https://www.flexbox.io) - This is an amazing tutorial which helped me finally understand Flexbox. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@purplehippo911](https://www.frontendmentor.io/profile/purplehippo911)
- Github - [@purplehippo911](https://www.github.com/purplehippo911)


## Acknowledgments

This solution helped me quite a lot on my JS and some of my CSS. Heres a link to his/her solution. ![chaw-bot](https://github.com/chaw-bot/interactive-rating-component)



