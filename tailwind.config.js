module.exports = {
    content: [
        "./app/**/*.js",
        "./app/**/*.blade.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
