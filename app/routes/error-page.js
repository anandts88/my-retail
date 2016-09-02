import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({

  /**
    @override
  */
  model({ id='unavailable' }) {
    const appstr = get(this, 'appstr');
    let model = appstr[id];

    // If entry is not defined in the application strings then consider it as system unavaliable scenario.
    if (!model) {
      model = appstr['unavailable'];
    }

    return model;
  }
});
