![Blobity](https://user-images.githubusercontent.com/9338324/137811301-e098fa34-1720-4b1f-9ffd-dee0912b2f71.png)

<p align="center">
    <a href="https://www.npmjs.com/package/blobity"><img src="https://img.shields.io/npm/v/blobity.svg?color=brightgreen" alt="npm version"></a>
    <img src="https://img.shields.io/bundlephobia/minzip/blobity.svg" alt="Gzip Size"> 
    <a href="https://github.com/gmrchk/blobity/blob/master/LICENSE"><img src="https://img.shields.io/github/license/gmrchk/blobity.svg" alt="License"></a>
    <a href="https://app.netlify.com/sites/nifty-tesla-5b3f95/deploys"><img src="https://api.netlify.com/api/v1/badges/7777ddcf-a486-4684-be57-59320956a0e3/deploy-status" alt="Netlify Status"></a>
</p>

- [Installation](https://github.com/gmrchk/blobity#installation)
- [License](https://github.com/gmrchk/blobity#license)
    - [Open source license](https://github.com/gmrchk/blobity#open-source-license)
    - [Commercial license](https://github.com/gmrchk/blobity#commercial-license)
- [Usage](https://github.com/gmrchk/blobity#usage)
- [Public API methods](https://github.com/gmrchk/blobity#public-api-methods)
- [React](https://github.com/gmrchk/blobity#react)
- [Vue](https://github.com/gmrchk/blobity#vue)
- [Prefers Reduced Motion](https://github.com/gmrchk/blobity#prefers-reduced-motion)
- [Contributions](https://github.com/gmrchk/blobity#contributions)
- [Special thanks](https://github.com/gmrchk/blobity#special-thanks)

> :warning: Note that the default auto-start behaviour of CDN Blobity version provided at `https://cdn.blobity.dev/by.js` was changed so the auto start is not triggered by default, and instead is only triggered when `autoStart` parameter is included `https://cdn.blobity.dev/by.js?autoStart&licenseKey=...`. This is due to the forgotten `noAutoStart` parameter being the most common issue and the behaviour being overall confusing and rarely used to auto start Blobity on a page.

## Installation
There are several options how to install Blobity to your site. 

The first is to include Blobity with scripts tag from the downloaded version available in this repository. This version will create a global `Blobity` object which you can use to create your instance.  

```html
<script src="./dist/blobity.min.js"></script>
```

The second is to include the same script from CDN. This version will also create a global `Blobity` object which you can use to create your instance.

```html
<script src="https://cdn.blobity.dev/by.js"></script>
```

The CDN version of Blobity also includes something called autostart, which will initialize Blobity with the default options, in case the `autoStart` param is defined.
Note that loading and auto-initializing Blobity in the `<head>` tag can lead to error of `document.body is null`, as body does not exist at the time.

```html
<script src="https://cdn.blobity.dev/by.js?autoStart&licenseKey=..."></script>
```

The third and most flexible option is to install with package managers like **npm** or **yarn**.

```shell
npm install blobity --save
# or 
yarn add blobity
```

Once the package is installed as a node module (eg. inside of `node_modules` folder), you can access it from `blobity` path.

```javascript
import Blobity from 'blobity';
```

There is an advantage to the latest format, because the library is not bundled, doesn't contain boiler plate code of the bundler, doesn't pollute the global scope and is much smaller and can be effectively tree-shaked as well.
The package also contains additional utils for React for example. 

## License
Check the LICENSE.md file in the root of this repository tree for closer details.

### Open source license
Blobity is distributed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) for any project compatible with GPLv3. In other words, as long as your application is open source under GPLv3, you may use Blobity under open source license.

### Commercial license
To use Blobity as part of commercial projects including website, themes and application, Commercial license is a way to go. License can be purchased at [blobity.dev](https://blobity.dev/). 


## Usage
To start Blobity, the instance needs to be created from its class. The class is either defined globally from a standalone versions, or can be imported from a package as a default export.  

```javascript
const options = { color: 'rgb(180, 180, 180)' };
new Blobity(options);

// or if imported from package
import Blobity from 'blobity';

const options = { color: 'rgb(180, 180, 180)' };
new Blobity(options);
```

> ⚠️ Blobity creates `canvas` element in body. For this, `<body>` must be present on the page at the time of initialization., so initializing Blobity in `<head>` can lead to error! A good practice is to load and initialize Blobity as late as possible (like before `</body>`), as it's usually not critical for the page to be displayed and work properly.    

## Options
As you may have noticed in a previous example, Blobity accepts options as an argument when the instance is being created. 
Options are passed as an object.

```javascript
const blobity = new Blobity({ option: "value" });
```

Blobity also allows to change options on the go with `updateOptions` method. 
This will only overwrite the defined subset of options and won't affect any options that are not passed in the method parameter object.

```javascript
const blobity = new Blobity({ option: "value" });
blobity.updateOptions({ option: "newValue" });
```

Following is a table of all available options, together with the description and default value. 

| Option                     	| Description                                                                                                                                                                                                                                                                                                                               	                        | Default value                                                                                       	    |
|----------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `color`                    	| Color option let's you define what color has the blob. It accepts values as a string, and in a format of rgb (eg. `rgb(0, 0, 0)` or hex values (eg. `#000000`). The alpha (eg. opacity) is defined in a separate option.                                                                                                                  	                        | `'rgb(180, 180, 180)'`                                                                              	    |
| `opacity`                  	| The opacity of the canvas used by Blobity to draw all of its content. It's helpful mainly when `zIndex` options is set to higher values and Blobity canvas is on top of the page content.                                                                                                                                                 	                        | `1`                                                                                                 	    |
| `licenseKey`               	| The license key you have received when purchasing your Blobity license. In case you are a GitHub sponsor (who are free to use this software without limits for as long as the monthly sponsorship is active), use your GitHub username as a license key.  **Not defining this option will result in a console warning.**                  	                        | `null`                                                                                              	    |
| `size`                     	| The size of the blob when it's not focused on any focusable element. The size is defined in pixels.                                                                                                                                                                                                                                       	                        | `40`                                                                                                	    |
| `focusableElements`        	| A selector of focusable elements which Blobity will consider clickable and will draw the highlight around.                                                                                                                                                                                                                                	                        | `'[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]'` 	    |
| `focusableElementsOffsetX` 	| An extra space on the X axis in pixels that Blobity should highlight around the focusable elements.                                                                                                                                                                                                                                       	                        | `0`                                                                                                 	    |
| `focusableElementsOffsetY` 	| An extra space on the Y axis in pixels that Blobity should highlight around the focusable elements.                                                                                                                                                                                                                                       	                        | `0`                                                                                                 	    |
| `zIndex`                   	| A `z-index` CSS property value that will be assigned to the canvas used by Blobity to draw any of its elements. It can be used to put the canvas above some elements on the page, while leaving it under others on the Z axis. Note that it might require good knowledge of how `z-index` works for any more advanced setups.             	                        | `-1`                                                                                                	    |
| `invert`                   	| A boolean option to make the Blobity blob make invert anything there is on the page. In order for it to work, the canvas needs to be put above all other elements on the page, so the value of the `z-index` option is force-set to the value of `2147483647`. Color options is also force-set to the value of `'rgb(255, 255, 255)'`.    	                        | `false`                                                                                             	    |
| `dotColor`                 	| If defined, Blobity sets the cursor to an SVG circle with a color you have defined. The format of the color follows the same rules as the `color` option does.  **Note that any definition of `cursor` CSS property in your own CSS can be overwriting Blobity. This is on purpose, so we don't break any explicitly defined behaviour.** 	                        | `null`                                                                                              	    |
| `dotSize`                 	| Numeric value for the size of the inner dot cursor. Applies only when the `dotColor` option is set. The size is defined in pixels. 	                                                                                                                                                                                                                               | 8                                                                                          	             |
| `magnetic`                 	| A boolean option to control whether the focusable elements should have a magnetic behaviour once hovered over. Keep in mind that Blobity is using `transform` to move elements around, which won't work with `display: inline` or similar, so you might have to tweak your styles a little.                                                 	                      | `true`                                                                                              	    |
| `mode`                     	| An option for spring presets, to adjust how quick/slow or bouncy the blob behaves. The options can be currently set to three presets, `normal`, `slow` or `bouncy`.                                                                                                                                                                       	                        | `'normal'`                                                                                          	    |
| `radius`                   	| The radius in pixel of the Blobity blob square when it's hovered over a focusable element. It can be used to make the blob completely round, or follow the elements own box radius in some way.                                                                                                                                           	                        | `4`                                                                                                 	    |
| `font`                     	| Font used when drawing a Blobity tooltip text. In case you're using some custom font, loading it on the page in any CSS standard way is enough for it to be usable for canvas too.                                                                                                                                                        	                        | `'sans-serif'`                                                                                      	    |
| `fontWeight`               	| Font weight used when drawing a Blobity tooltip text.                                                                                                                                                                                                                                                                                     	                        | `400`                                                                                               	    |
| `fontSize`                 	| Font size used when drawing a Blobity tooltip text.                                                                                                                                                                                                                                                                                       	                        | `40`                                                                                                	    |
| `fontColor`                	| Font color used when drawing a Blobity tooltip text.                                                                                                                                                                                                                                                                                      	                        | `'#000000'`                                                                                         	    |
| `tooltipPadding`           	| The value in pixel of how much space should be a padding around tooltip text.                                                                                                                                                                                                                                                             	                        | `12`                                                                                                 	   |
| `kineticMorphing`           	| Specifies whether the blob has a comet-like distortion while moving which increases with the speed.                                                                                                                                                                                                                                                              | `true`                                                                                                 	 | 

Some of the options can be also overwritten for specific elements, with `data-blobity-[option]` HTML attribute, the same way as the text for tooltip is defined. The following is an example of the usage. 

```html
<div data-blobity-tooltip="Tooltip text">I will have a tooltip with "Tooltip text" text.</div>
<div data-blobity-offset-x="10">I will have a X offset (option focusableElementsOffsetX) of 10 regardless of the global Blobity option.</div>
<div data-blobity-offset-y="10">I will have a Y offset (option focusableElementsOffsetY) of 10 regardless of the global Blobity option.</div>
<div data-blobity-magnetic="false">I will have magnetic behaviour (option magnetic) disabled regardless of the global Blobity option.</div>
<div data-blobity-radius="10">I will have a radius of the blob square (option radius) of 10 regardless of the global Blobity option.</div>
<div data-no-blobity>If the focusableElements options wasn't changed form default value, I will not be considered focusable element.</div>
```

## Tooltips
Blobity can display a tooltip when hovered over a focusable element instead of highlighting it visually. THis can be achieved with `data-blobity-tooltip` HTML attribute, together with the text it should contain.
This is mostly meant for short texts.

```html
<div data-blobity-tooltip="Tooltip text">I will have a tooltip with "Tooltip text" text.</div>
```

## Public API methods
Blobity has a several additional public API methods that can be used to control it programmatically. 

### focusElement
`focusElement` method accepts a DOM element and force highlights a specific element on the page regardless of the mouse position. 
It's useful when an attention needs to be drawn to a specific place. 

```javascript
const blobity = new Blobity();
const element = document.getElementById('some-important-button');

blobity.focusElement(element);
```

### showTooltip
`showTooltip` method accepts a string and force shows a tooltip with said test on the page regardless of the mouse position.
It's useful when you want to communicate some quick instructions programmatically. 

```javascript
const blobity = new Blobity();
const tooltip = 'Hey there!';

blobity.showTooltip(tooltip);
```

### reset
`reset` method disables the effects of the `focusElement` and `showTooltip` methods described previously. 

```javascript
const blobity = new Blobity();

blobity.reset();
```

### bounce
`bounce` will make the blob (or tooltip, or whatever form the Blobity currently has), bounce a little once.

```javascript
const blobity = new Blobity();

blobity.bounce();
```

## React
Since Blobity is a global library for which the instances should be created once, there is a helper hook to make initialization of Blobity easier in React applications.
This hook can be imported from the package version of Blobity. It accepts the same options as Blobity does, and returns a React ref of the instance.

```javascript
import useBlobity from 'blobity/lib/react/useBlobity';

const Component = () => {
    const blobity = useBlobity({
        licenseKey: '...'
    });

    return <div />;
};
```

## Vue

```vue
<template>
    <div />
</template>

<script setup>
import useBlobity from 'blobity/lib/vue/useBlobity';
const blobity = useBlobity({
    licenseKey: '...'
})
</script>
```

## Prefers Reduced Motion
Regardless of the system the computer is using, majority of them have a special switch to hint the creators of website, webapps, but also native applications that the user of the computer prefers to see less animations.
In css, this setting can be found under [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). 
Blobity checks for this setting and reduces animations where it can, without affecting the actual design too much.

## Contributions
Any contributions are welcome!

Remember, if merged, your code will be used as part of a commercial product. 
By submitting a Pull Request, you are giving your consent for your code to be integrated into Blobity as part of a commercial product.

## Special thanks
The name of this library, is inspired by [Flickity](https://flickity.metafizzy.co/), awesome carousel library that I've used extensively throughout my career, and always thought to be a piece of art, like anything [@desandro](https://twitter.com/desandro) produces. 

Special thanks to [@JoshWComeau](https://twitter.com/JoshWComeau) for the tips and help on Blobity and getting the word out there! 
