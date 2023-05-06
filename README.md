<div align="center">

# 🖍️svelte-svg-transform

A tiny library that makes it easier for you to add SVGs and tranform them in your svelte project.
You won't need to rename your `.svg` files to `.svelte` and manually edit them.

[![release version](https://img.shields.io/npm/v/svelte-svg-transform)](https://www.npmjs.com/package/svelte-svg-transform) [![weekly download count](https://img.shields.io/npm/dm/svelte-svg-transform)](https://npmcharts.com/compare/svelte-svg-transform?interval=30&minimal=true) ![primary language procentage](https://img.shields.io/github/languages/top/bartektelec/svelte-svg-transform) ![workflow build status](https://img.shields.io/github/workflow/status/bartektelec/svelte-svg-transform/Publish) ![last commit badge](https://img.shields.io/github/last-commit/bartektelec/svelte-svg-transform) [![licence badge](https://img.shields.io/npm/l/svelte-svg-transform)](https://github.com/bartektelec/svelte-svg-transform/blob/main/LICENSE)

</div>
<hr />

## Setup

- Install

```sh
npm install svelte-svg-transform
```

- Import in your component

```ts
import SvgIcon from 'svelte-svg-transform';
```

- Import your Icon's raw markup

```ts
import MyIcon from '../path/to/icon.svg?raw';
```

- Pass the icon to the component and transform it using props

```tsx
<span class="text-red-500">
	<SvgIcon svg={MyIcon} width={32} strokeWidth={3} strokeCurrentColor />
</span>

// outputs a 32px x 32px svg
// with red stroke of width 3
```

## Configuration

The component exposes some props that make it easier to manipulate SVG type files.
Make sure to pass your SVG's **raw** markup to the component like so:

```tsx
import SvgIcon from 'svelte-svg-transform';
import MyIcon from '../path/to/icon.svg?raw';

<SvgIcon svg={MyIcon} />;
```

From there you can use these props on the component:

#### svg

`svg markup - (required)`

Accepts only raw svg markup that you want to transform.

#### width, height

`number - default: 20 (optional)`

Adding width will resize your icon to desired size, you can also pass a height, but if you don't it will be set to the same as width.

#### fillCurrentColor, strokeCurrentColor

`boolean - default: false (optional)`

You can force your svg icons to use currentColor instead of their hard-coded color values.

- `fillCurrentColor`
  will override any hard-coded fill colors _except none_ to `"currentColor"`
- `strokeCurrentColor`
  will override any hard-coded stroke colors _except none_ to `"currentColor"`

#### fillOpacity

`number 0-1 (optional)`

You can change your SVG's internal fill-opacity properties (except none) to any value you want.

#### strokeWidth

`number (optional)`

You can change your SVG's internal stroke-width properties (except none) to any value you want.

#### strokeLineCap

`string (optional)`

You can change your SVG's internal stroke-line-cap properties (except none) to any value you want.

#### strokeOpacity

`number 0-1 (optional)`

You can change your SVG's internal stroke-opacity properties (except none) to any value you want.

## Licence

[MIT](https://opensource.org/licenses/MIT)
