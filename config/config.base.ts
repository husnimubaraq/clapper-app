const BaseConfig = {
    // always | dev | prod | never
    persistNavigation: 'dev',
  
    /**
       * Only enable if we're catching errors in the right environment
       */
    catchErrors: 'always',
  
    /**
       * This is a list of all the route names that will exit the app if the back button
       * is pressed while in that screen. Only affects Android.
       */
    exitRoutes: ['Login'],
  };
  
  export default BaseConfig;