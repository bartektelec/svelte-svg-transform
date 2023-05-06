# svelte-svg-transform

This is a tiny library that makes it easier for you to add SVGs and tranform them in your project.
You won't need to rename your `.svg` files to `.svelte` and add props to them.

## Quick Start

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

# Usage

The component exposes some props that make it easier to manipulate SVG type files.
Make sure to pass your SVG's **raw** markup to the component like so:

```ts
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
