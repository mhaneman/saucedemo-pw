# Sauce Demo Automation Framework Demo

## Setup and Installation

### Debian, Ubuntu, Mint
Playwright is offically supported on Debian and Ubuntu, making setup easy. 

Make sure to have the nessisary system dependencies installed.
```bash
sudo apt install -y nodejs npm
```

Install project dependencies
```bash
npm install
npx playwright install-deps
```

### Arch Linux

Playwright is not nativley supported on Arch Linux. The best way to handle compatibility is to use Distrobox with an Ubuntu image.

Install Distrobox
```bash
sudo pacman -S distrobox
```

create playwright container and install system dependencies
```bash
distrobox create --name playwright --image ubuntu:24.04

distrobox enter playwright

sudo apt update && sudo apt install -y nodejs npm
```

Install project dependencies
```bash
npm install
npx playwright install-deps
```
