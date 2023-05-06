import { resize, forceCurrentColor, setProp } from './utils.js';

describe('utils', () => {
	describe('resize', () => {
		it('should return unchanged markup if it isnt an svg', () => {
			const input = '<div width="30" height="30">Hello there</div>';

			expect(resize(input, 64)).toEqual(input);
		});

		it('should return unchanged markup if width and height not present', () => {
			const input = '<svg viewBox="0 0 24 24" fill="none"><path></path></svg>';

			expect(resize(input, 64)).toEqual(input);
		});

		it('should resize svg to same width and height if only one provided', () => {
			const input = '<svg width="24" height="32" viewBox="0 0 24 24" fill="none"></svg>';

			expect(resize(input, 64)).toEqual(
				'<svg width="64" height="64" viewBox="0 0 24 24" fill="none"></svg>'
			);
		});

		it('should resize both width and height', () => {
			const input = '<svg width="24" height="32" viewBox="0 0 24 24" fill="none"></svg>';

			expect(resize(input, 64, 128)).toEqual(
				'<svg width="64" height="128" viewBox="0 0 24 24" fill="none"></svg>'
			);
		});
	});

	describe('forceCurrentColor', () => {
		it('should force currentColor to fill', () => {
			const input = '<svg width="24" height="32" viewBox="0 0 24 24" fill="#ababab"></svg>';

			expect(forceCurrentColor(input, 'fill')).toEqual(
				'<svg width="24" height="32" viewBox="0 0 24 24" fill="currentColor"></svg>'
			);
		});
		it('should force currentColor to strokes', () => {
			const input = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="A1 B2 C4" stroke="#ababab" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

			expect(forceCurrentColor(input, 'stroke')).toEqual(input.replace('#ababab', 'currentColor'));
		});
		it('should not force where color is set to none', () => {
			const input = '<svg width="24" height="32" viewBox="0 0 24 24" fill="none"></svg>';

			expect(forceCurrentColor(input, 'fill')).toEqual(
				'<svg width="24" height="32" viewBox="0 0 24 24" fill="none"></svg>'
			);
		});
	});

	describe('setProp', () => {
		it('should set stroke width to 2', () => {
			const input = `<svg width="24" height="32" viewBox="0 0 24 24" fill="#ababab">
<path d="A1 B2 C3" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;

			expect(setProp(input, 'stroke-width', '2')).toEqual(
				input.replace('stroke-width="5"', 'stroke-width="2"')
			);
		});
	});
});
