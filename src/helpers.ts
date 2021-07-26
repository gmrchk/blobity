export type Color = { r: number; g: number; b: number }

export const extractRgbFromHex = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return { r, g, b }
}

export const extractRgbFromRgb = (rgb: string) => {
    const match = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(rgb)

    if (match === null) {
        throw new Error(`Couldn't convert color string ${rgb}`)
    }

    return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
    }
}

export const convertColor = (color: string) => {
    if (color.includes('rgb')) {
        return extractRgbFromRgb(color)
    } else if (color.startsWith('#')) {
        return extractRgbFromHex(color)
    }

    throw new Error(`Couldn't convert color string ${color}`)
}

export const isGradient = (color: Color | Color[]): color is Color[] => {
    return Array.isArray(color)
}

export const positive = (n: number) => Math.max(n, 0)
export const negative = (n: number) => Math.min(n, 0)
