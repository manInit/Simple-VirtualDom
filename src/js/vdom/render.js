const renderElem = vNode => {
    const vEl = document.createElement(vNode.tagName);

    for (const [k, v] of Object.entries(vNode.attrs)) {
        vEl.setAttribute(k, v);
    }

    for (const child of vNode.children) {
        vEl.appendChild(render(child));
    }

    return vEl;
}

const render = vNode => {
    if (typeof vNode === 'string')
        return document.createTextNode(vNode);

    return renderElem(vNode);
}

export { render };