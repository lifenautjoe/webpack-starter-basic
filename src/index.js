/**
 * @author Joel Hernandez <involvmnt@gmail.com>
 */

require('normalize.css/normalize.css');
require('./styles/index.scss');

export class MyClass{
    constructor(){
        console.log('Yo');
    }
}

new MyClass();