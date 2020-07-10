import _ from 'lodash';

let minLen = 2;

function isValid(name){
    return _.trim(name).length >= minLen;
}

export default {
    isValid
}