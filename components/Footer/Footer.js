import "./Footer.css";
const template = () => `
<div class="footerText">
            <h2>Daniel Gómez</h2>
        </div>
`;

export const printTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
