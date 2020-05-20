# Next transpile error after upgrading to 9.4.x reproduce

This repository is a minimal reproduction of the transpilation error that occurs when upgrading from next `9.3.6` to `9.4.x`.

## Install and run instructions

- Clone repository
- run `yarn install`
- run the example app with `yarn workspace test-app dev`
- navigate to `http://localhost:3000` and observe the error.

## Production build works

Note that doing `yarn workspace test-app next build && yarn workspace test-app next start` works. 

## 9.3.6 branch

This repository also has branch `9.3.6`. You can check out that branch and see a working example. Remember to run `yarn install` after switching branch. 