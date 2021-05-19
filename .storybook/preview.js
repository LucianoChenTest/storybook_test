import "../src/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: "3em" }}>
//       <Story args={{ a: "123", tasks: [] }} />
//     </div>
//   ),
// ];
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};