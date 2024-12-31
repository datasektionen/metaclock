Install wayfire-plugins-extra. Enable hide-cursor by copying the plugin line from /etc/wayfire/defaults.ini to ~/.config/wayfire.ini under `[core]` and adding `hide-cursor`.

Clone into `/home/metaclock/metaclock`

```sh
ln -s /home/metaclock/metaclock/metaclock-browser.service ~/.config/systemd/user/
ln -s /home/metaclock/metaclock/metaclock-httpserver.service ~/.config/systemd/user/
```

Enable services with `--user`

Profit???
