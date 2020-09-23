import render from './render';

const diffAttrs = (oldAttrs, newAttrs) => {
    const patches = [];

    for (const [k, v] of Object.entries(newAttrs)) {
        patches.push(node => {
            node.setAttribute(k, v);
            return node;
        });
    }
    
    for (const k of Object.keys(oldAttrs)) {
        if (!(k in Object.keys(newAttrs))) {
            patches.push(node => {
                node.removeAttribute(k);
                return node;
            })
        }
    }

    return node => {
        for (const patch of patches) { 
            patch(node);
        }
        return node;
    };
}

const diffChildren = (oldChildren, newChildren) => {
    const childPatches = [];

    oldChildren.forEach((oldChild, i) => {
        childPatches.push(diff(oldChild, newChildren[i]));
    })

    const additionalPatches = [];
    for (const additionalChild of newChildren.slice(oldChildren.length)) {
        additionalPatches.push(node => {
            node.appendChild(render(additionalChild));
            return node;
        });
    } 

    return parent => {
        parent.childNodes.forEach((child, i) => {
            childPatches[i](child);
        });

        for (const patch of additionalPatches) {
            patch(parent);
        }

        return parent;
    }
}

const diff = (oldVTree, newVTree) => {
    if (newVTree === undefined) {
        return node => {
            node.remove();
            return undefined;
        }
    }

    if (typeof newVTree === 'string' || typeof oldVTree === 'string') {
        if (newVTree !== oldVTree) {
            return node => {
                const newNode = render(newVTree);
                node.replaceWith(newNode);
                return newNode;
            };
        } else {
            return node => node;
        }
    }

    if (oldVTree.tagName !== newVTree.tagName) {
        return node => {
            const newNode = render(newVTree);
            node.replaceWith(newNode);
            return newNode;
        };
    }

    const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
    const patchChildren = diffChildren(oldVTree.children, newVTree.children);


    return node => {
        patchAttrs(node);
        patchChildren(node);
        return node;
    }
}

export default diff;