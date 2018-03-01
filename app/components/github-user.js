import Component from '@ember/component';

export default Component.extend({
	lessthan5: Ember.computed('publicRepos', function() {
		let publicRepos = this.get('publicRepos');

		return publicRepos < 5;
	}),
	lessthan10: Ember.computed('publicRepos', function() {
		let publicRepos = this.get('publicRepos');

		return publicRepos < 10 && publicRepos > 5;
	})
	// morethan20: Ember.computed('publicRepos', function() {
	// 	let publicRepos = this.get('publicRepos');

	// 	return publicRepos > 20 && publicRepos < 10;
	// })
});
