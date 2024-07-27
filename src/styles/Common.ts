type FontPropsType = {
    family?: string;
    weight?: number;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
    resMax?: number;
    resMin?: number;
}

export const font = ({family, weight, lineHeight, Fmin, Fmax, resMin = 425, resMax = 768}: FontPropsType) => `
    font-family: ${family || "Roboto"};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.36};
    font-size: calc( (100vw - 360px)/(${resMax} - ${resMin}) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

// font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);