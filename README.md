# showroom
Personal site showcasing projects I made for fun

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using pm2
Use pm2 tool

Installing pm2 (only once)
```sudo npm install pm2 -g```

Running
```pm2 --time --name showroom start npm -- start```

Listing running processes
```pm2 ps```

Stopping
```pm2 delete showroom```

Check application logs
```pm2 logs 0```

Empty logs
```pm2 flush 0```

## Using Docker
On Macos, make sure Colima is started

```bash
colima status
colima start -f
```

```bash
docker build --platform=linux/amd64 -t showroom .
docker save -o showroom.tar showroom
scp showroom.tar user@your-vps-ip:/path/on/vps/
```

on VPS:
```bash
docker load -i showroom.tar
docker run -d -p 4000:4000 showroom
```

Inspect container from inside :
```bash
docker exec -it <ID> sh
```