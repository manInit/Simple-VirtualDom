import { render } from './render';
import { setProp, removeProp, isEventProp } from './toggleProp';
import { BasicComponent } from './basicComponent';

const diffAttrs = (oldAttrs, newAttrs) => {
  const patches = [];
  //removing all listeners prop
  for (const [k, v] of Object.entries(oldAttrs)) {
    if (isEventProp(k)) {
      patches.push(node => {
        removeProp(k, v, node);
        return node;
      });
    }
  }

  for (const [k, v] of Object.entries(newAttrs)) {
    patches.push(node => {
      setProp(k, v, node);
      return node;
    });
  }
  
  for (const [k, v] of Object.entries(oldAttrs)) {
    if (!Object.keys(newAttrs).includes(k)) {
      patches.push(node => {
        removeProp(k, v, node);
        return node;
      });
    }
  }

  return node => {
    for (const patch of patches) { 
      patch(node);
    }
    return node;
  };
};

const diffChildren = (oldChildren, newChildren) => {
  const childPatches = [];

  oldChildren.forEach((oldChild, i) => {
    childPatches.push(diff(oldChild, newChildren[i]));
  });

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
  };
};

const diff = (oldVTree, newVTree) => {
  if (oldVTree instanceof BasicComponent) oldVTree = oldVTree.getVEl();
  if (newVTree instanceof BasicComponent) newVTree = newVTree.getVEl();

  if (newVTree === undefined) {
    return node => {
      node.remove();
      return undefined;
    };
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
  };
};

export { diff };