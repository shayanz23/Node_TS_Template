console.log("donkey");
const headingElem1 = document.getElementById("heading1");
let i = 0;
if (headingElem1 != null) {
    headingElem1.onclick = () => {
        i++;
        headingElem1.textContent = i.toString();
    };
}
//# sourceMappingURL=home.js.map