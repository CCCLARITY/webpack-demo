import _ from 'lodash';
import $ from 'jquery';
import cc from './ccclarity.js';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','Webpack'],'')
    return element;
}

$('#test').text('test jQuery');
document.body.appendChild(component());

console.log(cc());