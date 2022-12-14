## Resume Like Windows 10

This is a resume template like Windows 10.

### Live Demo

[Here is my resume.](https://adem-uysal-resume.vercel.app)

### How to use

Clone this repository

```bash
    git clone https://github.com/phibersoft/resume
```

Install dependencies

```bash
    npm install
```

Replace the content of this files:

```
    config/
    ├── project-config.tsx // Enter your projects
    ├── work-history-config.tsx // Enter your work history
    ├── programs
    │   ├── Summary.tsx // Enter your biography

    public/
    |—— adem-uysal-cv.pdf // Replace this pdf, use simple name
    |—— favicon.ico // Replace this favicon if you want
    |—— manifest.json // Replace with your information

    components/
    ├── Desktop
    │   ├── Desktop.tsx // Replace "adem-uysal-cv.pdf" with your pdf name

    pages/
    ├── app.tsx // Edit title & description in head tag
```

Run the project and check the result (OPTIONAL)

```bash
    npm run dev
```

Deploy this project to your Github. (OPTIONAL) <br />

Deploy to Vercel. (OPTIONAL)

<hr />
Star this repository if you like it. <br />

### Contributing

Pull requests are welcome. The only test your code has to pass is if the scores are still 100 :).

#### Only Test
![Lighthouse Scores](/public/lighthouse.png)

### Roadmap

- [x] Add projects
- [x] Add work history
- [x] Add biography
- [x] Add pdf
- [x] Add favicon
- [] Add dark mode
- [] Add language support
- [x] In mobile, 100vh is not working because of addressbar. Fix.
- [] Add more animations
- [] Drag & Drop Programs without using any library
- [] Start Menu
