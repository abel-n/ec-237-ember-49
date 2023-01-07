import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class ApplicationController extends Controller {
  @service store;

  constructor(...args) {
    super(...args);

    this.loadModel.perform();
  }

  loadModel = task(async () => {
    await this.store.findAll('example');
  });
}
