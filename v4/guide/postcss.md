# PostCSS

Wee has departed from [Less](http://lesscss.org/), a traditional pre-processor, to [PostCSS](http://postcss.org/). This article will clarify what it is, why and how it is being used in Wee 4, and why it is worth knowing about.

At it's core, PostCSS is simply a tool for transforming CSS with JavaScript. If you are familiar with Less or Sass, you are familiar with the idea of pre-processors and how they define custom syntax to traditional CSS in order to allow for a more powerful set of tools and features for the developer that results in de-duplicated and elegant stylesheets. Using Sass or Less requires a build process for your front-end development that will transform the Sass/Less that you write into raw CSS. PostCSS is a peer in this respect. However, PostCSS is not just a pre-processor. Instead, it is a platform that provides the opportunity to custom tailor the way you compose and distribute CSS.

We have hopefully explained why we chose to use PostCSS, now let's look at how. Here are the plugins that are currently being used in the order they are being used in Wee:

- [css-mqpacker](https://github.com/simbo/node-css-mqpacker)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [cssnano](https://www.npmjs.com/package/cssnano)

### CSS Mqpacker

This plugin packs all of your duplicate media queries into one.

**Before**
```css
.foo {
  width: 240px;
}

@media screen and (min-width: 768px) {
  .foo {
    width: 576px;
  }
}

.bar {
  width: 160px;
}

@media screen and (min-width: 768px) {
  .bar {
    width: 384px;
  }
}
```

**After**

```css
.foo {
  width: 240px;
}

.bar {
  width: 160px;
}

@media screen and (min-width: 768px) {
  .foo {
    width: 576px;
  }
  .bar {
    width: 384px;
  }
}
```

### Autoprefixer

This is the defacto PostCSS plugin. If you don't already use it, you should start. In short, it adds vendor prefixes for CSS declarations automatically so you don't have to. Here is an example:

**Before**

```css
a {
    display: flex;
}
```

**After**

```css
a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```

### CSS Nano
This plugin minifies our final CSS output, hence it comes at the end of our plugin chain.
