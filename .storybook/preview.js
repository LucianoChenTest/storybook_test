import "../src/index.css";
export const parameters = {
  // actions: {
  //   argTypesRegex: "^on[A-Z].*",
  // },
  // backgrounds: {
  //   values: [
  //     { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //     { name: 'blue', value: '#00f' },
  //   ],
  // },
  // controls: {
  //   // expanded: true,
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  //   presetColors: [
  //     { color: '#ff4785', title: 'Coral' },
  //     'rgba(0, 159, 183, 1)',
  //     '#fe4a49',
  //   ]
  // },
  // docs: {
  //   expanded: false,
  // },
};

export const decorators = [
  (Story, args) => {
    console.log(args)
    return <div style={{ margin: "3em" }}>{Story()}</div>;
  },
];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
};
