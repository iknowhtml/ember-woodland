import Ember from 'ember';
import Option from 'woodland/models/option';
import Poll from 'woodland/models/poll';

const polls = [
	Poll.create({
		id: '1',
		question: 'Which Poisonous Plant Are You?',
		options: [
			Option.create({id: '1', value: 'Nightshade', votes: 0}),
			Option.create({id: '2', value: 'Hemlock', votes: 0}),
			Option.create({id: '3', value: 'Rhubarb', votes: 0})
		]
	}),

	Poll.create({
		id: '2',
		question: 'Which Is Your Favorite Woodland Wanderer Way?',
		options: [
			Option.create({id: '4', value: 'Honesty', votes: 0}),
			Option.create({id: '5', value: 'Integrity', votes: 0}),
			Option.create({id: '6', value: 'Patience', votes: 0})
		]
	})
];

export default Ember.Service.extend({
	createPoll(poll) {
		poll.set('id', (polls.length + 1).toString());
		polls.pushObject(poll);
		return poll;
	},
	getPolls() {
		return polls;
	},
	getPollById(id) {
		return polls.findBy('id', id);
	},
	newPoll() {
		return Poll.create({
			options: [
				Option.create({votes: 0}),
				Option.create({votes: 0}),
				Option.create({votes: 0})
			]
		});
	}
});
