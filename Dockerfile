FROM denoland/deno:1.30.3

COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 8000

CMD ["deno", "task", "start"]