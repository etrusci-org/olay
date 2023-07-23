function removeHTMLTags(string)
{
    const dump = document.createElement('div')
    dump.innerHTML = string ?? ''
    return dump.innerText.trim()
}
