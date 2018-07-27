import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | hello-word', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs `{{hello-word}}`);


		assert.equal(this.element.textContent.trim(), 'Pharbers 欢迎你，新同学！\n        Hello Word');

		// Template block usage:
		await render(hbs `{{#hello-word}}{{/hello-word}}`);
		assert.equal(this.element.textContent.trim(), 'Pharbers 欢迎你，新同学！\n        Hello Word');
	});
});