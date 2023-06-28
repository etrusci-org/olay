const outputElement = document.querySelector('div.mod');
const modHandle = new URL(document.location.href).searchParams.get('mod');
if (outputElement
    && modHandle) {
    const modScript = await import(`../mod/${modHandle}.js`);
    new modScript.Mod(outputElement);
}
export {};
