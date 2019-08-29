# Awesome Card
> A collection of awesome cards


## Portrait Card

### About

Card with color gradient and hover animation

![screen](https://raw.githubusercontent.com/dodoroy/blur-enlarger/master/example/portrait-card.gif)

### Usage
1. Include the css.
```html
<link rel="stylesheet" href="../dist/portrait-card.css">
```
2. Add wrapper and coresponding class in html. (You can add color option class name in the item wrapper. Available color options: blue red green yellow brown)
```html
  <div class="item green" style="width: 330px;height: 490px;">
        <div class="portrait-card">
            <div class="thumbnail">
                <div class="wrapper">
                    <div class="baseBg"></div>
                    <picture class="picture">
                        <source media="(max-width: 1023px)" srcset="puppy.jpeg">
                        <source media="(min-width: 1024px)" srcset="puppy.jpeg">
                        <img class="art" src="puppy.jpeg" role="presentation" />
                    </picture>
                    <div class="gradient"></div>
                    <div class="highlight"></div>
                    <div class="scrim"></div>
                </div>
                <div class="content">
                    <div class="btns">
                        <svg width="60px" height="60px" viewbox="0 0 60 60">
                            <circle fill-opacity="0.2" cx="30" cy="30" r="29" stroke="#FFFFFF"
                                stroke-width="1.5"></circle>
                            <g transform="translate(16.071429, 17.142857)" fill-rule="nonzero" fill="#FFFFFF">
                                <path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="metadata">
                <div class="title">
                    <div style="-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.18em;max-height:2.36em">
                        Vinegar</div>
                </div>
                <div class="joined-tags">
                    <div style="-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;line-height:1.5em;max-height:1.5em">
                        PG-13 • Superheroes, Science Fiction • Movie (2018)</div>
                </div>
                <div class="hoverData">
                    <div style="-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;line-height:1.5em;max-height:6em">A man develops superpowers after becoming a host to an alien.</div>
                </div>
            </div>
        </div>
    </div>
```

## Portrait Card

### About

Full Screen Image Blur and Enlarge

![screen](https://raw.githubusercontent.com/dodoroy/blur-enlarger/master/example/fullscreen-card.gif)

### Usage
1. Include the css.
```html
<link rel="stylesheet" href="../dist/fullscreen-card.css">
```
2. Add wrapper and coresponding class in html.
```html
<div class="fullscreen-card">
    <div class="fullscreen" style="background-image: url(./banner.jpg); ">
        <!-- <img src="./banner.jpg" alt=""> -->
    </div>
</div>
```

## Credit
Created by [@dodo糯](http://weibo.com/dodoroy), *[blog](http://www.effy.me)*
