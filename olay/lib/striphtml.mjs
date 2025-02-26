export function striphtml(content) {
    const dump = document.createElement('div');
    dump.innerHTML = content ?? '';
    return dump.innerText.trim();
}
