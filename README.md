<h1 align="center">
</h1>

&nbsp;

![site](design/desktop-preview.jpg))

<h2 align="center"> 
	🚧 Article preview component - Complete 🚀 🚧
</h2>

<a href="https://www.frontendmentor.io/challenges?difficulties=1"><img src="https://img.shields.io/badge/Difficulty-NEWBIE-14c2c8?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Newbie"></a>

&nbsp;

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

&nbsp;

## What I learned

<h2>Handling Touch and Mouse Events</h2>

<p>Through implementing the sharing feature on my website, I learned how to handle touch and mouse events for mobile and desktop devices.</p>

<p>To achieve this, I used the ontouchstart property to check if the user is on a touch-enabled device. If so, I bound a click event to the sharing icon to toggle the visibility of the sharing container. For desktop users, I used the mouseenter and mouseleave events to show and hide the sharing container on hover.</p>

<p>Here's an example of the code I used to handle touch and mouse events:</p>

```
let isTouchDevice = 'ontouchstart' in document.documentElement;
let shareShow = document.querySelector('.main__contact--share');
let container = document.querySelector('.main__contact__socials');

if (isTouchDevice) {
  // Bind click event to sharing icon for touch-enabled devices
  shareShow.addEventListener('click', function() {
    container.classList.toggle('expand');
  });
} else {
  // Bind mouse events to sharing icon for desktop devices
  shareShow.addEventListener('mouseenter', function() {
    container.classList.add('expand');
  });

  shareShow.addEventListener('mouseleave', function() {
    container.classList.remove('expand');
  });
}
```

<p>By implementing this feature, I was able to provide a seamless user experience for both mobile and desktop users when sharing my website's content.</p>


<h2>Creating Speech Bubble Pointers with CSS ::after Pseudo-element</h2>

<p>Additionally, I learned how to use CSS's ::after pseudo-element to create speech bubble-shaped pointers for the sharing container when it is expanded. By positioning the ::after element with absolute positioning relative to the container, I was able to create a triangular pointer shape using the border-style, border-width, and border-color properties. Here's an example of the CSS code I used to create the speech bubble pointers:</p>

css
```
.main__contact__socials.expand::after {
    position: absolute;
    content: "";
    width: 0.75rem;
    height: 1.5rem;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 0.8rem;
    border-color: var(--very-dark-grayish-blue) transparent transparent transparent;
}
```
<p>By using the ::after pseudo-element to create speech bubble pointers, I was able to add a fun and playful visual element to my sharing container that helps draw the user's attention to it.</p>

## Links

- [Preview Site](https://jvolfe-article-preview-component.netlify.app/)
- [Frontend Mentor Solution Page]()

&nbsp;

## My process

### Built with

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


&nbsp;

### Responsive 📱

### Mobile - 375px

<p align="left">

  <img alt="" title="" src="design/mobile-design.jpg" width="150px">
    <img alt="" title="#" src="" width="150px">

</p>

### Tablet - 768px
### Desktop - 1440px

<p align="left">
  <img alt="" title="#" src="!design/desktop-design.jpg" width="400px">
    <img alt="" title="#" src="" width="400px">

</p>

## 👨‍💻 Author

- Frontend Mentor - [@engsofjvolfe](https://www.frontendmentor.io/profile/engsofjvolfe)
- LinkedIn - [@jeanco-volfe](https://www.linkedin.com/in/jeanco-volfe/)
<!-- - Instagram - [@jeanco_volfe](https://www.instagram.com/jeanco_volfe/) -->
