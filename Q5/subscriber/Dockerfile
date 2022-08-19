FROM node:alpine
LABEL maintainer = "pragati"
WORKDIR /usr/pragati/Q5exam
COPY subscriber.js /usr/pragati/Q5exam
RUN npm install mqtt
CMD ["node","subscriber.js"]