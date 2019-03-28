import Route from '@ember/routing/route';
import data from 'resume/utils/data';

export default Route.extend({
  model() {
    return data;
  },
});
