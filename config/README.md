{
  // vue-i18n cấu hình
  vueI18n: {},

  // nếu true, vue-i18n-loader là thêm vào to Nuxt's Webpack config
  vueI18nLoader: false,

  // Danh sách các ngôn ngữ địa điểm được ứng dụng của bạn hỗ trợ
  // This can either be an array of codes: ['en', 'fr', 'es']
  // Hoặc một mảng các đối tượng cho các cấu hình phức tạp hơn: 
  // cái code này cũng đại diện cho Subtag các loại languer cho trình duyệt ISO 639-1
  // http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
  // file ngôn ngữ được xác định bằng thư mục  langDir: 'name/' và lazy: true
  // [
  //   { code: 'en', iso: 'en-US', file: 'en.js' },
  //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
  //   { code: 'es', iso: 'es-ES', file: 'es.js' }
  // ]
  //   `iso` `giá trị iso` nên có:
  //   - code of ISO 639-1 (e.g. 'en')
  //   - code of ISO 639-1  và mã của ISO 3166-1 alpha-2, có dấu gạch nối (ví dụ: 'en-US')
  locales: [],

  // Ngôn ngữ mặc định của ứng dụng, URL cho miền địa phương này sẽ không có tiền tố nếu
  // chiến lược là prefix_except_default
  defaultLocale: null,

  // nếu set cái này là no prefix nó sẽ không sử dụng các điểm tiền tố của ngôn ngữ ví dụ /en/+tên folder hoặc /vi/+tên folder. 

  // nếu bạn có một folder en và vi trong thư mục pages nếu thêm tiền tố nó sẽ thành /en/en và /en/vi

  // lên lựa chọn no_prefix như vậy nó sẽ không tự động thêm tiền tố 

  // chỉ sử dụng thêm tiền tố prefix khi muốn url trở thàn /en/+ [pages/] + ánh xạ file hoặc folder

  // Dấu phân cách được sử dụng để tạo tên tuyến đường cho từng miền, bạn không nên
  // cần thay đổi điều này
  // need to change this
  routesNameSeparator: '___',

  // Hậu tố được thêm vào tên tuyến được tạo cho miền địa phương mặc định nếu chiến lược là  prefix_and_default,
  //  bạn không cần thay đổi điều này
  defaultLocaleRouteNameSuffix: 'default',

  // Chiến lược tạo tuyến, có thể được đặt thành một trong những điều sau đây:
  // - 'no_prefix': routes won't be prefixed
  // - 'prefix_except_default': add locale prefix for every locale except default
  // - 'prefix': add locale prefix for every locale
  // - 'prefix_and_default': add locale prefix for every locale and default
  strategy: 'prefix_except_default',

  Wether hay không các bản dịch nên được tải lười biếng, nếu điều này được kích hoạt,
  // bạn PHẢI cấu hình tùy chọn langDir và ngôn ngữ phải là một mảng các đối tượng,
  // mỗi cái key chứa một message trong tập tin
  lazy: false,

  // Directory that contains translations files when lazy-loading messages,
  // this CAN NOT be empty if lazy-loading is enabled
  langDir: null,

  // Đặt đường dẫn này thành đường dẫn mà bạn muốn chuyển hướng người dùng truy cập URL gốc (/)
  rootRedirect: null,

  // Enable browser language detection to automatically redirect user
  // to their preferred language as they visit your app for the first time
  // Set to false to disable
  detectBrowserLanguage: {
    // If enabled, a cookie is set once a user has been redirected to his
    // preferred language to prevent subsequent redirections
    // Set to false to redirect every time
    useCookie: true,
    // Cookie name
    cookieKey: 'i18n_redirected',
    // Set to always redirect to value stored in the cookie, not just once
    alwaysRedirect: false,
    // If no locale for the browsers locale is a match, use this one as a fallback
    fallbackLocale: null
  },

  // Set this to true if you're using different domains for each language
  // If enabled, no prefix is added to your routes and you MUST configure locales
  // as an array of objects, each containing a domain key
  differentDomains: false,

  // If using different domains, set this to true to get hostname from X-Forwared-Host
  // HTTP header instead of window.location
  forwardedHost: false,

  // If true, SEO metadata is generated for routes that have i18n enabled.
  // Note that performance can suffer with this enabled and there might be compatibility
  // issues with some plugins. Recommended way is to set up SEO as described in:
  // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
  seo: false,

  // Fallback base URL to use as prefix for alternate URLs in hreflang tags.
  // By default VueRouter's base URL will be used and only if that is not available,
  // fallback URL will be used.
  baseUrl: '',

  // By default a store module is registered and kept in sync with the
  // app's i18n current state
  // Set to false to disable
  vuex: {
    // Module namespace
    moduleName: 'i18n',

    // If enabled, current app's locale is synced with nuxt-i18n store module
    syncLocale: false,

    // If enabled, current translation messages are synced with nuxt-i18n store module
    syncMessages: false,

    // Mutation to commit to set route parameters translations
    syncRouteParams: true
  },

  // By default, custom routes are extracted from page files using babel parser,
  // set this to false to disable this
  parsePages: true,

  // If parsePages option is disabled, the module will look for custom routes in
  // the pages option, refer to the "Routing" section for usage
  pages: {},

  // By default, custom paths will be encoded using encodeURI method.
  // This does not work with regexp: "/foo/:slug-:id(\\d+)". If you want to use
  // regexp in the path, then set this option to false, and make sure you process
  // path encoding yourself.
  encodePaths: true,

  // Called right before app's locale changes
  beforeLanguageSwitch: (oldLocale, newLocale) => null,

  // Called after app's locale has changed
  onLanguageSwitched: (oldLocale, newLocale) => null
}