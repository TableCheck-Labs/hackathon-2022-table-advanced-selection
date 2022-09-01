type CodeColor = string | [R: number, G: number, B: number];

function hexToRGBArray(color: string): [R: number, G: number, B: number] {
  let transformedColor = color;

  if (transformedColor.indexOf('#') === 0) {
    transformedColor = color.slice(1);
  }

  if (transformedColor.length === 3) {
    transformedColor =
      color.charAt(0) +
      color.charAt(0) +
      color.charAt(1) +
      color.charAt(1) +
      color.charAt(2) +
      color.charAt(2);
  }

  if (transformedColor.length !== 6) {
    throw new Error(`Invalid hex color: ${transformedColor}`);
  }

  const rgb: [R: number, G: number, B: number] = [0, 0, 0];
  for (let i = 0; i <= 2; i += 1) {
    rgb[i] = parseInt(transformedColor.substring(i * 2, i * 2 + 2), 16);
  }
  return rgb;
}

function luma(color: CodeColor): number {
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  const rgbRegex = /^rgb\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3})\)$/;
  const rgbaRegex =
    /^rgba\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]|([0-9])?(\.[0-9]+))\)$/;
  let rgb = [0, 0, 0];
  if (typeof color === 'string' && hexRegex.test(color)) {
    rgb = hexToRGBArray(color);
  } else if (typeof color === 'string' && rgbRegex.test(color)) {
    const match = color.match(rgbRegex);
    if (match) {
      rgb = [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
    }
  } else if (typeof color === 'string' && rgbaRegex.test(color)) {
    const match = color.match(rgbaRegex);
    if (match) {
      rgb = [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
    }
  }
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

export function getContrastingColor(
  color: CodeColor,
  classicThemeColor: string,
  darkThemeColor: string
): string {
  return luma(color) >= 150 ? classicThemeColor : darkThemeColor;
}
