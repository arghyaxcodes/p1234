// Example: Generating SVG with embedded font
// During development: import from ../generated/
// After publishing: import from p1234/fonts/
import Roboto from '../generated/Roboto';

function generateSVGWithFont(text: string): string {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100">
    <defs>
        <style>
            @font-face {
                font-family: "${Roboto.name}";
                src: url("${Roboto.base64}") format("woff2");
            }
            .custom-text {
                font-family: "${Roboto.name}", sans-serif;
                font-size: 24px;
                fill: #333;
            }
        </style>
    </defs>
    <text x="20" y="50" class="custom-text">${text}</text>
</svg>
    `.trim();
}

const svg = generateSVGWithFont('Hello, World!');
console.log(svg);
