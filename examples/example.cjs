// Example: Using fonts in CommonJS
const Baloo_2 = require('p1234/fonts/Baloo_2');

const my_css = `
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
