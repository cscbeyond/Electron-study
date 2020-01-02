const remote = require('electron').remote;

function getSizePosition() {
    const win = remote.getCurrentWindow();
    console.log('宽度：' + win.getSize()[0]);
    console.log('高度：' + win.getSize()[1]);
    console.log('x:' + win.getPosition()[0]);
    console.log('y:' + win.getPosition()[1]);
}
function setSizePosition() {
    const win = remote.getCurrentWindow();
    win.setSize(400, 400, true); // 第三个参数是： 动画效果开关 mac可以
    win.setPosition(400, 400, true); // 第三个参数是： 动画效果开关 mac可以
}