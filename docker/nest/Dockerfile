FROM node:19 AS base

RUN \
    apt-get update && \
    npm install -g pnpm


FROM base AS dev

ARG NEST_PROJECT_PATH=./backend-nest
ARG VIMRC_PATH=./.vimrc.example

COPY ${VIMRC_PATH} /home/node/.vimrc

COPY ${NEST_PROJECT_PATH}/package.json ${NEST_PROJECT_PATH}/pnpm-lock.yaml ./

RUN apt-get update && \
    apt-get install -y vim && \
    npm install -g @nestjs/cli && \
    pnpm install

USER node


FROM base AS prod

ARG NEST_PROJECT_PATH=./backend-nest

COPY ${NEST_PROJECT_PATH}/pnpm-lock.yaml ./

RUN pnpm fetch --prod

ADD ${NEST_PROJECT_PATH} ./
RUN pnpm install -r --offline --prod

CMD [ "pnpm" "run" "start:prod" ]