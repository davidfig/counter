// const easyedit = require('easyedit')
const Panel = require('./console-counter');

let counter, n = 0

function count()
{
    counter.log(n++)
}

window.onload = function ()
{
    const panel = new Panel({ side: 'top left' })
    panel.log('top left panel')

    const panel2 = new Panel({ side: 'bottomRight' })
    panel2.log('bottom right panel<br>With two lines.')

    counter = new Panel({side: 'bottom left', background: 'red'})
    count()
    setInterval(count, 250)

    require('./highlight')();
};