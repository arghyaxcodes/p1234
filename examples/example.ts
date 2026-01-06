// Example: Using fonts in TypeScript
// During development: import from ../generated/
// After publishing: import from p1234/fonts/
import Baloo_2 from '../generated/Baloo_2';

const my_css: string = `
@font-face {
    font-family: "${Baloo_2.name}";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("${Baloo_2.base64}") format("woff2");
}

body {
    font-family: "${Baloo_2.name}", sans-serif;
}
`;

console.log('Font Name:', Baloo_2.name);
console.log('CSS Generated Successfully!');
console.log(my_css);
