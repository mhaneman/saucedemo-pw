# Playwright SDET Portfolio

## Setup and Installation

### Arch Linux

Playwright is not nativley supported on Arch Linux. The best way to handle compatibility is to use Distrobox with an Ubuntu image.

```bash
# Install Distrobox
sudo pacman -S distrobox
```

```bash
# create playwright container and install system dependencies
distrobox create --name playwright --image ubuntu:24.04

distrobox enter playwright

sudo apt update && sudo apt install -y nodejs npm
```

```bash
# Install project dependencies
npm install
npx playwright install-deps
```
