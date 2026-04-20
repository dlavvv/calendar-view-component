# 📅 Calendar View Component

A lightweight and easy-to-use tool for integrating a monthly calendar into your web applications. It's built with **Lit** to ensure high performance and native browser compatibility.

## Features

- **Performance:** Built with LitElement for minimal overhead and lightning-fast rendering
- **Interactive Navigation:** Seamlessly browse through months and years
- **Date Selection:** Highlight and select specific days with visual feedback
- **Auto-Logic:** Handles all calendar calculations (leap years, month start days) automatically
- **Clean UI:** A minimalist design that fits any modern dashboard or interface
- **Custom Events:** Emits a standard event whenever a date is selected
- **Framework Agnostic:** Works everywhere (React, Vue, Angular, or plain HTML/JS)

## Requirements

- **Node.js**: 18.x or higher (recommended)
- **Browser**: Modern browsers with Custom Elements (V1) and Shadow DOM support (Chrome, Firefox, Safari, Edge)  

#### This package is published as an **ES Module**. To use it effectively:
- **With a Bundler:** Use a modern build tool like **Vite**, **Webpack**, or **Rollup**. They will automatically handle the `lit` dependencies for you.
- **Without a Bundler:** If you are not using a build tool, you will need to use an [import map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#import_maps) to tell the browser where to find the Lit library.

## Installation

Install the component via npm:

```bash
npm install @dlavvv/calendar-view-component
```

## Usage

### 1. Import the component
In your JavaScript/TypeScript entry point (e.g., `main.js` or `app.js`):

```javascript
import '@dlavvv/calendar-view-component';
```

### 2. Use the HTML tag

Simply add the custom element to your HTML file:

```html
<calendar-view></calendar-view>
```

### 3. Handle interactions

The component dispatches a date-selected custom event whenever a user clicks on a day. You can capture the selected date like this:

```javascript
const calendar = document.querySelector('calendar-view');

calendar.addEventListener('date-selected', (event) => {
  // date is provided in "YYYY-MM-DD" format
  console.log('Selected Date:', event.detail.date);
});
```

## Themes

The component is designed with modular styling. Currently, it supports two distinct visual modes: **light** and **dark**.

**Dark Mode:** Optimized for high-contrast dashboards and late-night usage (Default).  
**Light Mode:** A clean, professional look for standard light-themed applications.

<img src="https://github.com/user-attachments/assets/2cad7279-3ba6-4ba3-8c37-974240b689b9" alt="Dark Mode" width="27%">
<img src="https://github.com/user-attachments/assets/5d1f30a1-edbe-49b4-8c88-23d318c10adf" alt="Light Mode" width="27%">

Of course, you can also fully customize your calendar by creating a new stylesheet or modifying the existing ones.

### How to change styles

#### Light Mode
Change the import and the `static styles` property as follows:

```javascript
import { lightMode } from './styles/light.js';

// inside your class:
static styles = lightMode;
```
#### Dark Mode

Similarly, for Dark Mode, use the dark styles import:

```javascript
import { darkMode } from './styles/dark.js';

// inside your class:
static styles = darkMode;
```


> [!NOTE]
> Future versions will include a toggle property for dynamic switching.


## API References

| Property  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `currentMonth`  | Number | Current Month | The month currently displayed (0-11) |
| `currentYear`  | Number | Current Year | The year currently displayed |
| `selectedDay` | Number | Today | The currently highlighted day |


## Events
| Event Name	| Detail	| Description |
| ------------- | ------------- | ------------- |
| `date-selected` |	{ date: string } |	Fired when a user selects a valid day |

## License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for details.
