Install `unclutter` with apt or w/e

Clone into `/home/metaclock/metaclock`

```sh
ln -s /home/metaclock/metaclock/metaclock-browser.service ~/.config/systemd/user/
ln -s /home/metaclock/metaclock/metaclock-httpserver.service ~/.config/systemd/user/
```

Enable services with `--user`

Profit???
