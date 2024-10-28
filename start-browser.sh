#!/bin/sh

unclutter &

/usr/bin/chromium-browser --start-maximized --kiosk http://localhost:3000/
