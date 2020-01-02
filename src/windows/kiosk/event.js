const remote = require('electron').remote;

function onClick (){
    const button = document.querySelector('#button');
    const win = remote.getCurrentWindow();
    if(win.isKiosk()){
        button.innerHTML = '退出锁定模式';
        win.setKiosk(false);
    }else {
        button.innerHTML = '进入锁定模式';
        win.setKiosk(true);
    }
}