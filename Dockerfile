FROM nginx
RUN apt-get update
RUN apt-get install python3 -y
RUN mkdir /build
WORKDIR /build
COPY . .
RUN python3 genSite.py
RUN cp -r out/* /usr/share/nginx/html