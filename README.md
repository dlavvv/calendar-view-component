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

> [!NOTE]
> The theme is applied at the build level via the component's static styles. Future versions will include a toggle property for dynamic switching.


## API References

| Property  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| currentMonth  | Number | Current Month | The month currently displayed (0-11) |
| currentYear  | Number | Current Year | The year currently displayed |
| selectedDay | Number | Today | The currently highlighted day |


## Events
| Event Name	| Detail	| Description |
| ------------- | ------------- | ------------- |
| date-selected |	{ date: string } |	Fired when a user selects a valid day |

## License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for details.
