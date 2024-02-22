---
layout: default
title: IDNA UTS46 for JS
parent: CentralNic Reseller
nav_order: 7
showtoc: 1
---

# IDNA (UTS 46) for JavaScript

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](https://opensource.org/licenses/MIT)
[![node](https://img.shields.io/node/v/idna-uts46-hx.svg)](https://www.npmjs.com/package/idna-uts46-hx)
[![npm version](https://img.shields.io/npm/v/idna-uts46-hx.svg?style=flat)](https://www.npmjs.com/package/idna-uts46-hx)

This module is a IDNA UTS46 library for javascript.
This is a maintained fork of the idna-uts46 library originally written by jcranmer.

The [JS Punycode converter library](https://github.com/bestiejs/punycode.js/) is
a great tool for handling Unicode domain names, but it only implements the
Punycode encoding of domain labels, not the full IDNA algorithm. In simple
cases, a mere conversion to lowercase text before input would seem sufficient,
but the real mapping for strings is far more complex. This library implements
the full mapping for these strings, as defined by
[UTS #46](https://unicode.org/reports/tr46/).

## Requirements

* Find all our engine dependencies defined in our project's [package.json](https://github.com/centralnicgroup-opensource/rtldev-middleware-idna-uts46/blob/master/package.json). We suggest using [nvm](https://github.com/creationix/nvm) for setting up NodeJS.

## Usage Instructions

### NodeJS

```bash
    npm i idna-uts46-hx@latest --save
```

FYI: The default format of the plugin is ESM!

```js
import { convert, toAscii, toUnicode } from 'idna-uts46-hx';
console.dir(convert(fußball.com));
console.dir(convert(fußball.de));
console.dir(convert([fußball.de, fußball.com]));
// ...
```

```js
import * as uts46 from 'idna-uts46-hx';
console.dir(uts46.convert(fußball.com));
console.dir(uts46.convert(fußball.de));
console.dir(uts46.convert([fußball.de, fußball.com]));
// ...
```

### Using it in-browser

#### Installation

You can rely on the github raw files

* CJS: [https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-idna-uts46/master/dist/index.bundle.js](https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-idna-uts46/master/dist/index.bundle.js)
* ESM: [https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-idna-uts46/master/dist/index.mjs](https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-idna-uts46/master/dist/index.mjs)

NOTE: The above is linking to master which is updating with each release and could come with breaking changes. Feel free to replace `master` in the urls with the tag/version of choice e.g. `v6.0.0`.

... or installing it also via npm and using the files from `node_modules` folder:

* CJS: `node_modules/idna-uts46-hx/dist/index.bundle.js`
* ESM: `node_modules/idna-uts46-hx/dist/index.mjs`

You can copy those files just over for using them as static files under `/public` in your project.

#### HTML / IFEE

NOTE: you have to define the path for attribute `src` accordingly!

```html
<script src="index.bundle.js">
    const uts46 = idnaUts46;
    console.dir(uts46.convert(fußball.com));
    console.dir(uts46.convert(fußball.de));
    console.dir(uts46.convert([fußball.de, fußball.com]));
</script>
```

#### HTML / ESM

NOTE: you have to define the path for `from` accordingly!

```html
<script type="module">
    import * as uts46 from "idna-uts46-hx/dist/index.mjs"
    console.dir(uts46.convert(fußball.com));
    console.dir(uts46.convert(fußball.de));
    console.dir(uts46.convert([fußball.de, fußball.com]));
</script>
```

## Usage Examples

We provide only documentation and examples for the latest release.

### IDNA mess for dummies

Unfortunately, the situation of internationalized domain names is rather
complicated by the existence of multiple incompatible standards (IDNA2003 and
IDNA2008, predominantly). While UTS #46 tries to bridge the incompatibility,
there are four characters which cannot be so bridged: ß (the German sharp s),
ς (Greek final sigma), and the ZWJ and ZWNJ characters. These are handled
differently depending on the mode; in ``transitional`` mode, these strings are
mapped to different ones, preserving capability with IDNA2003; in
``nontransitional`` mode, these strings are mapped to themselves, in accordance
with IDNA2008.

Presently, this library uses ``transitional`` mode, compatible with all known
browser implementations at this point. It is expected that, in the future, this
will be changed to ``nontransitional`` mode.

`It is highly recommended that you use the ASCII form of the label for storing
or comparing strings.`

### API

#### uts46.toAscii

`uts46.toAscii(domain, options)`

Converts a domain name to the correct ASCII label. The second parameter is an
optional parameter. We support all options of `tr46`. Still, we do an
automatic detection if `transitionalProcessing` is required for the provided
TLD. Still, you can override this by specifying that option explicitely. All
other options fallback to the defaults of `tr46`.

Find the supported options and their meaning [here](https://github.com/jsdom/tr46?tab=readme-ov-file#options);

```js
/* eslint-disable */
uts46.toAscii('öbb.at') // 'xn-bb-eka.at'
uts46.toAscii('ÖBB.AT') // 'xn-bb-eka.at'
uts46.toAscii('XN-BB-EKA.AT') // 'xn-bb-eka.at'
uts46.toAscii('faß.de', { transitionalProcessing: false }) // 'fass.de'
uts46.toAscii('faß.de') // 'fass.de'
uts46.toAscii('faß.de', { transitionalProcessing: true }) // 'xn--fa-hia.de'
uts46.toAscii('xn--fa-hia.de') // 'xn--fa-hia.de'
uts46.toAscii(String.fromCodePoint(0xd0000)) // Error (as it is unassigned)
```

#### uts46.toUnicode

`uts46.toUnicode(domain, options)`

Converts a domain name to a normalized Unicode label. The second parameter is an
optional parameter. We support all options of `tr46`. Still, we do an
automatic detection if `transitionalProcessing` is required for the provided
TLD. Still, you can override this by specifying that option explicitely. All
other options fallback to the defaults of `tr46`.

Find the supported options and their meaning [here](https://github.com/jsdom/tr46?tab=readme-ov-file#options);

```js
/* eslint-disable */
uts46.toUnicode('xn-bb-eka.at') // 'öbb.at'
uts46.toUnicode('ÖBB.AT') // 'öbb.at'
uts46.toUnicode('O\u0308BB.AT') // 'öbb.at'
uts46.toUnicode('faß.de') // 'faß.de'
uts46.toUnicode('xn--fa-hia.de') // 'faß.de'
uts46.toUnicode('﷼') // "ریال"
uts46.toUnicode(String.fromCodePoint(0xd0000)) // Error (as it is unassigned)
```

#### uts46.convert

`uts46.convert(domain)`

Converts a domain name in correct way. Returning both IDN and Punycode Variants.
This function is not supporting options yet and is reflecting our needs and related default options.
This only affects `transionalProcessing` which automatically detected. If you need options supported
here as well, let us know.

```js
/* eslint-disable */
uts46.convert('xn-bb-eka.at') // { IDN: 'öbb.at', PC: 'xn-bb-eka.at' }
uts46.convert(['öbb.at', 'xn--fa-hia.de']) // { IDN: ['öbb.at', 'faß.de'], PC: ['xn-bb-eka.at', 'xn--fa-hia.de'] }
```
