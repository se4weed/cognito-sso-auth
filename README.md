- install mkcert

  ```bash
  brew install mkcert
  ```

- create certs

  ```bash
  mkcert -key-file certs/key.pem -cert-file certs/cert.pem localhost
  ```

- start dev server

  ```bash
  pnpm i
  pnpm dev
  ```
