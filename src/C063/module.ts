import _ from 'lodash';

_.mul = function(arr: number[]): number {
  return arr.reduce((total, current) => total * current, 1);
};

export default _;
