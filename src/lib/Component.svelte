<script lang="ts">
	import { resize, setProp } from './utils';

	export let svg: string;
	export let width = 20;
	export let height: number | undefined = undefined;
	export let fill: string | undefined = undefined;
	export let fillOpacity: number | undefined = undefined;
	export let stroke: string | undefined = undefined;
	export let strokeWidth: number | undefined = undefined;
	export let strokeLineCap: string | undefined = undefined;
	export let strokeOpacity: number | undefined = undefined;

	let markup: string | undefined = undefined;

	$: boundHeight = height === undefined ? width : height;
	$: {
		let output = svg;
		if (width) output = resize(output, width, boundHeight);
		if (fill) output = setProp(output, 'fill', fill);
		if (stroke) output = setProp(output, 'stroke', stroke);
		if (strokeWidth)
			output = setProp(
				output,
				'stroke-width',
				String(strokeWidth)
			);
		if (strokeLineCap)
			output = setProp(
				output,
				'stroke-linecap',
				String(strokeLineCap)
			);
		if (strokeOpacity)
			output = setProp(
				output,
				'stroke-opacity',
				String(strokeOpacity)
			);
		if (fillOpacity)
			output = setProp(
				output,
				'fill-opacity',
				String(fillOpacity)
			);

		markup = output;
	}
</script>

{#if markup}
	<!-- eslint-disable-next-line svelte/no-at-html-tags-->
	{@html markup}
{/if}
