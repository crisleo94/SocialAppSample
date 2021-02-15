module.exports = {
    ...require('@spothero/prettier-config'),
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.scss',
            options: {
                singleQuote: true,
		useTabs: false,
		tabWidth: 2
            },
        },
        {
            files: ['.babelrc', '.eslintrc', '.postcssrc'],
            options: {
                parser: 'json',
            },
        },
        {
            files: '*.jsx',
            options: {
                useTabs: false,
                tabWidth: 2,
                semi: false,
                singleQuote: true,
            },
        },
    ],
};
