import render from './js/vdom/render';
import createElement from './js/vdom/createElement';
import mount from './js/vdom/mount';
import diff from './js/vdom/diff';

const createApp = count => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count
    },
    children: [
        'The current count is: ',
        count.toString()
    ]
});

let count = 0;
let vApp = createApp(count);
const app = render(vApp);
let newRoot = mount(app, document.getElementById('root'));

setInterval(() => {
    count++;
    const vNewApp = createApp(count);
    const patch = diff(vApp, vNewApp);
    newRoot = patch(newRoot);
    vApp = vNewApp;
}, 1000);