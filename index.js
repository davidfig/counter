// yy-counter
// In-browser counter to watch changeable values like counters or FPS
// David Figatner
// (c) YOPEY YOPEY LLC 2017
// MIT License
// https://github.com/davidfig/counter

module.exports = class Counter
{
    /**
     * @param {object} [options]
     * @param {side} [options.side=rightbottom] side to place the panel (combination of right/left and bottom/top)
     * @param {number} [options.padding=7px]
     * @param {string} [options.color=white]
     * @param {string} [options.background=rgba(150,150,150,0.5)]
     * @param {*} {options.xxx} where xxx is a CSS style for the div (in javascript format, i.e., 'backgroundColor' instead of 'background-color')
     */
    constructor(options)
    {
        options = options || {}
        options.side = options.side || 'rightbottom'
        options.side.toLowerCase()
        options.padding = options.padding || '7px'
        options.color = options.color || 'white'
        options.background = options.background || 'rgba(150,150,150,0.5)'
        this.div = document.createElement('div')
        this.findParent(options).appendChild(this.div)
        for (let style in options)
        {
            if (style !== 'parent' && style !== 'side')
            {
                this.div.style[style] = options[style]
            }
        }
    }

    /**
     * find parent div
     * @private
     * @return {HTMLElement}
     */
    findParent(options)
    {
        const styles = []
        let name = 'yy-counter-'
        if (options.side.indexOf('left') !== -1)
        {
            name += 'left-'
            styles['left'] = 0
        }
        else
        {
            name += 'right-'
            styles['right'] = 0
        }
        if (options.side.indexOf('top') !== -1)
        {
            name += 'top'
            styles['top'] = 0
        }
        else
        {
            name += 'bottom'
            styles['bottom'] = 0
        }
        const test = document.getElementById(name)
        if (test)
        {
            return test
        }
        const container = document.createElement('div')
        container.id = name
        container.style.position = options.position
        container.style.overflow = 'hidden'
        container.style.position = 'fixed'
        container.style.zIndex = 10000
        for (let style in styles)
        {
            container.style[style] = styles[style]
        }
        document.body.appendChild(container)
        return container
    }

    /**
     * replaces the innerHTML of the console
     * @param {string|number} text1
     * @param {string|number} [text2]
     * @param {string|number} [...textn] any number of arguments
     */
    log()
    {
        let s = ''
        for (let arg of arguments)
        {
            s += '<div>' + arg + '</div>'
        }
        this.div.innerHTML =  s
    }

    /**
     * appends to the innerHTML of the console
     * @param {string|number} text1
     * @param {string|number} [text2]
     * @param {string|number} [...textn] any number of arguments
     */
    append()
    {
        let s = this.div.innerHTML
        for (let arg of arguments)
        {
            s += '<div>' + arg + '</div>'
        }
        this.div.innerHTML = s
    }
}