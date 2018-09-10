import _ from 'lodash';

export const buildForWorkers = filters => {
  return _.pickBy(filters, v => v && (!v.length !== undefined || v.length > 0));
};
