<script lang="ts">
	import Svg from '$lib/Component.svelte';
	import Icon from './icon.svg?raw';
	import Icon2 from './icon2.svg?raw';

	let options = {
		width: 64,
		fill: undefined,
		fillOpacity: 1,
		stroke: undefined,
		strokeOpacity: 1,
		strokeWidth: 2,
		strokeLineCap: 'round'
	};

	let containerColor = '#00FF00';
</script>

<h1>Svelte Svg Transform Playground</h1>
<main>
	<div class="controls">
		<label>
			width {options.width}
			<input
				type="range"
				min="8"
				max="64"
				bind:value={options.width}
			/>
		</label>
		<label>
			fill
			<select bind:value={options.fill}>
				<option value={undefined}>Default</option>
				<option value="currentColor">currentColor</option>
				<option value="blue">blue</option>
				<option value="red">red</option>
			</select>
		</label>
		<label>
			stroke
			<select bind:value={options.stroke}>
				<option value={undefined}>Default</option>
				<option value="currentColor">currentColor</option>
				<option value="blue">blue</option>
				<option value="red">red</option>
			</select>
		</label>

		<label>
			strokeWidth {options.strokeWidth}
			<input
				type="range"
				min="0.5"
				step="0.25"
				max="15"
				bind:value={options.strokeWidth}
			/>
		</label>

		<label>
			strokeOpacity {options.strokeOpacity}
			<input
				type="range"
				min="0.1"
				step="0.1"
				max="1"
				bind:value={options.strokeOpacity}
			/>
		</label>
		<label>
			fillOpacity {options.fillOpacity}
			<input
				type="range"
				min="0.1"
				step="0.1"
				max="1"
				bind:value={options.fillOpacity}
			/>
		</label>
		<label>
			strokeLineCap {options.strokeLineCap}
			<select bind:value={options.strokeLineCap}>
				<option>butt</option>
				<option>round</option>
				<option>square</option>
			</select>
		</label>

		<label>
			Container Text Color
			<input type="color" bind:value={containerColor} />
		</label>
	</div>
	<div class="s">
		<div>
			<h2>Stroke Icon</h2>
			<div style="color: {containerColor}" class="output">
				<Svg {...options} svg={Icon} />
			</div>
		</div>

		<div>
			<h2>Fill Icon</h2>
			<div style="color: {containerColor}" class="output">
				<Svg {...options} svg={Icon2} />
			</div>
		</div>
	</div>
</main>

<style>
	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
		border: 1px solid black;
		padding: 0.5rem 1rem;
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.s {
		display: flex;
		gap: 3rem;
	}

	.output {
		display: inline-flex;
		padding: 3rem;
		border: 1px solid blue;
		border-radius: 4px;
	}
</style>
