# yy-counter
In-browser counter to watch changeable values like counters or variables watches

## Rationale
While console.log is helpful for debugging, it does not work well for watching values that change quickly, like counters, (x, y) coordinates, or FPS. That's where console-counter comes in. 

console-counter.js quickly and easily creates an in-browser console and attaches it to a corner of the screen. It also stacks mulitple counters

## Code Example

    const Counter = require('yy-counter')

    const counter = new Counter()

    let n = 0
    setInterval(() => counter.log(n++), 250)

## Live Example
https://davidfig.github.io/counter/

## Installation

    npm i yy-counter

## API Reference
```
    /**
     * @param {object} [options]
     * @param {side} [options.side=rightbottom] side to place the panel (combination of right/left and bottom/top)
     * @param {number} [options.padding=7px]
     * @param {string} [options.color=white]
     * @param {string} [options.background=rgba(150,150,150,0.5)]
     * @param {*} {options.xxx} where xxx is a CSS style for the div (in javascript format, i.e., 'backgroundColor' instead of 'background-color')
     */
    constructor(options)

    /**
     * replaces the innerHTML of the console
     * @param {string|number} text1
     * @param {string|number} [text2]
     * @param {string|number} [...textn] any number of arguments
     */
    log()

    /**
     * appends to the innerHTML of the console
     * @param {string|number} text1
     * @param {string|number} [text2]
     * @param {string|number} [...textn] any number of arguments
     */
    append()
```
## class ConsoleCounter
    /**
     * @param {object} [options]
     * @param {side} [options.side='rightbottom'] side to place the panel (combination of right/left and bottom/top)
     * @param {number} [options.padding=7]
     * @param {string} [options.color=white]
     * @param {string} [options.background=rgba(150,150,150,0.5)]
     * @param {string} [options.parent=document.body]
     * @param {string} [options.position=fixed]
     * @param {number} [options.zIndex=1000]
     * @param {*} {options.xxx} where xxx is a CSS style for the div
     */
    constructor(options)

    /**
    * replaces the innerHTML of the console
    * @param {string|number} text-1
    * @param {string|number} [text-2]
    * @param {string|number} ... [text-n]
    */
    log(text-1, [text-2], ... [text-n])
    
    /**
    * appends to the innerHTML of the console
    * @param {string|number} text-1
    * @param {string|number} [text-2]
    * @param {string|number} ... [text-n]
    */
    append(text-1, [text-2], ... [text-n])
    
## license  
MIT License  
(c) 2017 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
