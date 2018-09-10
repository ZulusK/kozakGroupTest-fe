import _ from 'lodash';

export const buildForWorkers = filters => {
  console.log(
    filters,
    _.pickBy(filters, v => v && (!v.length !== undefined || v.length > 0))
  );
  return _.pickBy(filters, v => v && v.length);
};
