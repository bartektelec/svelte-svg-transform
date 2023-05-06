export const resize = (markup: string, width: number, height: number = width) => {
	if (!markup.trim().startsWith('<svg')) return markup;

	return markup
		.replace(/(?:width=")\w+(?:")/, `width="${width}"`)
		.replace(/(?:height=")\w+(?:")/, `height="${height}"`);
};

export const setProp = (markup: string, prop: string, value: string) => {
	if (!markup.trim().startsWith('<svg')) return markup;

	const reg = new RegExp(`(?:${prop}=")#*(?!none)\\w+(?:")`, 'g');

	return markup.replace(reg, `${prop}="${value}"`);
};

export const forceCurrentColor = (markup: string, prop: string) => {
	return setProp(markup, prop, 'currentColor');
};
