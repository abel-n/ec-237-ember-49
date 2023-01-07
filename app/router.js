import EmberRouter from '@ember/routing/router';
import config from 'ec-237-ember-49/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
