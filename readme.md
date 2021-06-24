# Virtual DOM
Simple realization virtual dom with reactivity.
Also i remade slider from Genshin Impact site (https://genshin.mihoyo.com)
And it works. We change only state slider and it update automatically


### vNode contains only 
- tagName
- Attrs (handlers event too)
- Childrens


### examples
made state reactivity. with patch dom on update state
```js
this.state = reactive(this.state);
let vTree, rootNode;
watchEffect(() => {
  if (!rootNode) {
    vTree = this.getVirtualEl();
    rootNode = render(vTree);
  } else {
    let newVTree = this.getVirtualEl();
    const patch = diff(vTree, newVTree);
    patch(rootNode);
    vTree = newVTree;
  }
});
```

