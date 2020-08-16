import './main.less';
async function a() {
    return new Promise((resolve, reject) => resolve(2));
}

a().then(() => console.log(2));

