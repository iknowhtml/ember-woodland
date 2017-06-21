import Ember from 'ember';

export default Ember.Object.extend({
  optionVotes: Ember.computed.mapBy('options', 'votes'),
  pollVotes: Ember.computed.sum('optionVotes')
});
