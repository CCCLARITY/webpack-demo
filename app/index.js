import _ from 'lodash';
import $ from 'jquery';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','Webpack'],'')
    return element;
}

$('#test').text('test jQuery');
document.body.appendChild(component());
