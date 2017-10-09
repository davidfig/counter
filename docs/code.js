const Panel = require('..');

let counter, n = 0

function count()
{
    counter.log(n++, n)
}

window.onload = function ()
{
    const panel = new Panel({ side: 'top left' })
    panel.log('top left panel')

    const panel2 = new Panel({ side: 'bottomRight' })
    panel2.log('bottom right panel', 'With two lines in one log statement.')

    counter = new Panel({side: 'bottom left', background: 'red'})
    count()
    setInterval(count, 250)

    const panel3 = new Panel({ side: 'left-bottom', background: 'green' })
    panel3.log('this is a separate panel that stacks itself')

    require('./highlight')();
};