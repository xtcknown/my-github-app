import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		//return this.store.findRecord('user', 'kkgomez2');
		return this.store.findRecord('user', params.user_id);
	}
});
