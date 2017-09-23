import { css } from 'styled-components';

export function spacing(modifier = 1) {
    return `${modifier * 10}px`;
}

export const MAX_APP_WIDTH = '1367px';

// reference: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
const sizes = {
    larger: 1366,
    large: 1024,
    medium: 769,
    small: 511,
    smallest: 320
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) =>
        css`
            @media (min-width: ${emSize}em) {
                ${css(...args)};
            }
        `;

    const emSizeDown = (sizes[label] - 1) / 16;
    accumulator[`${label}Down`] = (...args) =>
        css`
            @media (max-width: ${emSizeDown}em) {
                ${css(...args)};
            }
        `;
    return accumulator;
}, {});
