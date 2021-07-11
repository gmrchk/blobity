# Blobity


## Installation
Include Kinet with scripts tag

```html
<script src="./dist/blobity.min.js"></script>
```
or with *npm* and *import*
```shell
npm install blobity --save
```
```javascript
import Blobity from 'blobity';
```
and finally, enable Blobity...

```javascript
new Blobity();
```

## Options
Blobity accepts several options defined as follows.
```javascript
const blobity = new Blobity({ option: "value" });
```

Blobity also allows to change options on the go with `updateOptions` method. This will only overwrite the defined subset of options.

```javascript
const blobity = new Blobity({ option: "value" });
blobity.updateOptions({ option: "newValue" });
```




