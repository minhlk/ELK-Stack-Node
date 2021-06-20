# Introduction
- Simple Nodejs application that using ELK stack (ElasticSearch, Kibana, LogStash) for centralize log.
- This is only for demo purpose, you should use it with Memcached, Redis, RabitMQ because we're using UDP to request to Logstash, we need a fallback method in case ElasticSearch is down.

# How to run this application

- Step 1: Clone https://github.com/deviantony/docker-elk

- Step 2: Copy conf.d/logstash.conf to docker-elk/logstash/pipeline/logstash.conf

- Step 3: In docker-elk run docker compose up

- Step 4: In this folder run docker compose up

- Step 5: Go to kibana UI http://localhost:5601/ with user:

``` 
user: elastic
password: changeme
```

- Step 6: Go to http://localhost:5601/app/management/kibana/objects and import conf.d/nodejs-kibana.json

- Step 7: Go to http://localhost:3000/ and refresh several times

- Step 8: Go to http://localhost:5601/app/dashboards those requests in step 7 will be reflected here.

Documents:
- [Instroduction](https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/)
- [ELK Stack Docker](https://github.com/deviantony/docker-elk)
