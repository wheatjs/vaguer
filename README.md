# Vaguer

This repo provides a basic setup for developing component libraries in Vite with Vue 3

## Features
- Type Generation
- Tailwind CSS via [WindiCSS](https://windicss.netlify.app/)
- Automatically export and register all components in `./src/components`
- `./demo` folder where you can test your components

## Checklist
After you clone the repo there are a few things you are going to want to change.

- [ ] Rename `name` field in `package.json`
- [ ] Rename `module` and `main` fields in `package.json`(for example `"module": "./dist/[my-package].js"`)
- [ ] Make the same changes in the previous step to the exports field
- [ ] Change the author name in `LICENSE`
- [ ] Clean up the README

## Commands
```bash
npm run dev # Will run the demos app so you can see your components
npm run build # Will build your components into a library and generate types
```