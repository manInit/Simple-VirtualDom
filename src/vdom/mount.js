const mount = (node, target) => {
  target.innerHTML = '';
  target.appendChild(node);
  return node;
};

export { mount };