# Huddle — Sign-in Component 88

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/huddle-sign-in/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable recreation of the 5.37-second screen recording.

## Run
Open `index.html` in a modern browser. No package install or build step required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000.

## Screen and interactions
- Dark Huddle component showcase header and code panels
- Split sign-in card with pale illustration area and white login form
- Four playful SVG characters whose expressions/poses react to the current field and password visibility
- Email and password fields, remember-for-30-days checkbox
- Show/hide password control
- Login, Google login, Forgot password and Sign up interactions (demo feedback)
- Responsive mobile layout

## Demo credentials
- Email: `hasib@gmail.com`
- Password: `hasib123`

The password starts blank; the credentials are shown beneath the card as in the recording.

## Source fragments
`source-extracts/` contains readable snippets transcribed from the three code panels in the video:
- `index.html.fragment` — face / eyes / mouth SVG group names
- `app.css.fragment` — mood variables and character lean transform
- `app.js.fragment` — `mood()` derived from password visibility and focused field

The video shows only partial code snippets, not a complete original repository. The runnable app is a fresh HTML/CSS/JS reconstruction of the visible layout and behaviour. The source fragments are preserved separately and are not imported.

## Backend note
No real authentication, account creation, password reset, or Google OAuth is connected. The demo login only accepts the credentials above and shows local feedback. Do not use real passwords in this sample.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
