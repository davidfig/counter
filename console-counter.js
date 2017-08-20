/**
 * @file console-counter.js
 * @summary In-browser console to watch changeable values like counters or FPS
 * @author David Figatner
 * @license MIT
 * @copyright YOPEY YOPEY LLC 2017
 * {@link https://github.com/davidfig/console-counter}
 */

module.exports = class ConsoleCounter
{
    /**
     * @param {object} [options]
     * @param {side} [options.side='rightbottom'] side to place the panel (combination of right/left and bottom/top)
     * @param {string} [options.parent=document.body]
     * @param {number} [options.padding=7px]
     * @param {string} [options.color=white]
     * @param {string} [options.background=rgba(150,150,150,0.5)]
     * @param {string} [options.position=fixed]
     * @param {number} [options.zIndex=1000]
     * @param {*} {options.xxx} where xxx is a CSS style for the div
     */
    constructor(options)
    {
        options = options || {}
        options.side = options.side || 'righbottom'
        options.side.toLowerCase()
        options.padding = options.padding || '7px'
        options.color = options.color || 'white'
        options.background = options.background || 'rgba(150,150,150,0.5)'
        options.parent = options.parent || document.body
        options.zIndex = options.zIndex || 1000
        options.position = options.position || 'fixed'
        this.div = document.createElement('div')
        options.parent.appendChild(this.div)
        this.div.style.position = options.position
        this.div.style.overflow = 'hidden'
        if (options.side.indexOf('left') !== -1)
        {
            this.div.style.left = 0
        }
        else
        {
            this.div.style.right = 0
        }
        if (options.side.indexOf('top') !== -1)
        {
            this.div.style.top = 0
        }
        else
        {
            this.div.style.bottom = 0
        }
        for (let style in options)
        {
            if (style !== 'parent' && style !== 'side')
            {
                this.div.style[style] = options[style]
            }
        }
    }

    /**
     * replaces the innerHTML of the console
     * @param {string} text
     */
    log(text)
    {
        this.div.innerHTML = text
    }

    /**
     * appends to the innerHTML of the console
     * @param {string} text
     */
    append(text)
    {
        this.div.innerHTML += text
    }
}