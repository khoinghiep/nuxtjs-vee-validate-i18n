module.exports = {
    API_ROOT: 'http://localhost:8088',
    I18N: {

        // redirect to abc không thêm / ở phía trước cú pháp mặc định bắt đầu bằng localhost:3000/ + 
        rootRedirect: 'en', // folder
        // forwardedHost: true,
        strategy: 'prefix',// 
        defaultLocale: 'en', // nếu để là vi hoặc en thì cú pháp url có tiền tố url/vi hoặc url/en/ + folder
        // defaultLocaleRouteNameSuffix: 'en',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.js'
            },
            {
                code: 'vi',
                iso: 'vi-VN',
                name: 'vietnamess',
                file: 'vi-VN.js'
            }
        ],
        // load file 
        lazy: true,
        langDir: 'lang/',

        // using languer by user cookie

        // loadLanguagesAsync: true,

        // detectBrowserLanguage: {
        //     // nếu sử dụng cái này  thì nó sẽ dựa vào setting trong  trình duyệt của người dùng
        //     // sau đó set cookie và chạy vào uri đó nếu muốn set mặc định từ code thì chạy ...
        //     // ko lên sử dụng cái này
        //     useCookie: false, // nếu đặt là false nó sẽ không set cookie b
        //     cookieKey: 'langer',
        //     alwaysRedirect: false
        // },

        pages: {
            // about: {
            //     vi: '/gioi-thieu',
            //     en: '/about'
            // },
            // login: {
            //     vi: '/dang-nhap',
            //     en: '/login'
            // }
            //     'services/index': {
            //         en: '/services',
            //         fr: '/offres',
            //     },
            //     'services/development/index': {
            //         en: '/services/development',
            //         fr: '/offres/developement',
            //     },
            //     'services/development/app/index': {
            //         en: '/services/development/app',
            //         fr: '/offres/developement/app',
            //     },
            //     'services/development/website/index': {
            //         en: '/services/development/website',
            //         fr: '/offres/developement/site-web',
            //     },
            //     'services/coaching/index': {
            //         en: '/services/coaching',
            //         fr: '/offres/formation',
            //     }
        }

    }
}