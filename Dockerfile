FROM mhart/alpine-node:10

#RUN apk update && \
#	apk upgrade && \
#	apk add --no-cache \
#		shadow
	
RUN mkdir -p /usr/src/app

#RUN groupadd -r nodejs \
#	&& useradd -m -r -g nodejs nodejs \
#	&& chown nodejs:nodejs /usr/src/app

#USER nodejs

WORKDIR /usr/src/app

COPY . .

RUN npm install --only=production

CMD ["./bin/docker-entry-point.sh"]
