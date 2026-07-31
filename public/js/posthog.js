if (
  !location.hostname.startsWith('localhost') &&
  !location.hostname.startsWith('127.0.0.1') &&
  !location.hostname.startsWith('100.90.82.23')
) {
  (function (document) {
    window.posthog = window.posthog || [];
    window.posthog._i = window.posthog._i || [];

    window.posthog.init = function (apiKey, options, instanceName) {
      const instance = instanceName
        ? (window.posthog[instanceName] = [])
        : window.posthog;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `${options.api_host}/static/array.js`;

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      instance.people = instance.people || [];
      instance.toString = function (loaded) {
        const name = instanceName ? `posthog.${instanceName}` : 'posthog';
        return loaded ? name : `${name} (stub)`;
      };
      instance.people.toString = function () {
        return `${instance.toString(1)}.people (stub)`;
      };

      const methods =
        'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capture has_opted_out_capture opt_in_capture reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId'.split(
          ' '
        );

      methods.forEach((method) => {
        instance[method] = function (...args) {
          instance.push([method, ...args]);
        };
      });

      window.posthog._i.push([apiKey, options, instanceName]);
    };

    window.posthog.__SV = 1;
  })(document);

  window.posthog.init('phc_vLWZdmXDDFnUCLjSMGFNyKh9hP23xtE2NrXgVBSiLEDf', {
    api_host: 'https://app.posthog.com',
  });
}
