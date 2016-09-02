export function initialize() {
  const application = arguments[1] || arguments[0];

  // Since application strings can be accessed by all possible ember objects.
  // Injecting `service/app-str` to all routes, controllers and components.
  // To avoid manual injection of this service every time.
  application.inject('route', 'appstr', 'service:app-str');
  application.inject('controller', 'appstr', 'service:app-str');
  application.inject('component', 'appstr', 'service:app-str');
}

export default {
  name: 'app-str',
  initialize
};
