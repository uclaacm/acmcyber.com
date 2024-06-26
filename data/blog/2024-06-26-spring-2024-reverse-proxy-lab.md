---
title: Reverse Proxy Lab Lab Spring 2024
authors: [Jason An]
category: Projects
tags: [spring-2024, cyber-lab]
description: Coding a reverse proxy
---

# Reverse Proxy Lab Blog Post

<!-- maybe put the GIF of the RFC crawl here -->

## What is a Reverse Proxy?
A reverse proxy is a server that sits in front of a web server to forward requests to clients (like the web browser). This allows us to implement all kinds of security-focused features on top of the server, as well as to serve multiple different websites on the same server.

## Parsing HTTP Requests
A sample HTTP request looks something like (each newline is a \r\n, or CRLF):
```
POST / HTTP/1.1
Host: 127.0.0.1:8080
User-Agent: curl/8.7.1
Accept: */*
Content-Length: 15
Content-Type: application/x-www-form-urlencoded

a=b&c=d
```
The first step to parsing an HTTP request is to parse out the request method, path, and headers. We do this by reading in data and splitting on CRLFs, and then parsing each line separately. When we encounter 2 consecutive CRLFs (a blank line), we stop parsing, because that signifies the start of the body.

The first line is parsed specially, as it contains the method, the path, and then the HTTP version (which should be `HTTP/1.1`), all separated by spaces.

For every other line, we split on the first colon, lowercase the header name to normalize it, and trim leading and trailing whitespace from the header value.

Then, if a `Content-Length` header is specified, we pipe that many bytes to the body of the backend. We read it in chunks, and write the chunk to the backend before reading the next, so that we don't read the entire body into memory because it could be very large.

## Working with Backends


## Proxy Modules

In addition to the core reverse proxy, we implemented a ton of security-focused modules on top!

### Logging
We implemented some logging to record successful requests and any errors that may crop up in the course of handling a request. Log files are created and written to by a `log()` function, with their paths and names specified by a `config.json` file.

`log()` is called upon the completion of a successful request (storing this as an INFO event) or when another function encounters an issue (logging an ERROR event). ERROR events contain the type of error, the host in question, and the contents of the request, while INFO events contain request headers, user agent information, backend IPs, and response times. This information could be useful in tracking down bugs, locating invalid backend servers, or collecting some info on adversarial traffic, among other things.


### Auth

Authentication allows for the protection of particular backends or in our case the entire reverse proxy by checking that the user has valid authorization before forwarding the request.

To do this, the reverse proxy first checks the requests for a authorization header which is a base64 encoding of the username and password information. If this is missing, the reverse proxy sends over a 401 Unauthorized response which the browser will use to prompt the user for a username and password using WWW-Authenticate.
```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm=\"Please log in :) \"
Content-Length: 0
```

Supposing that the user fills out this prompt, the browser sends across another request that should contain the authorization header.
With this, the reverse proxy will decode the encoded username and password and then compare them to the accounts in the reverse proxy.
When the reverse proxy starts, it reads in an array of accounts containing usernames and hashed passwords. For our implementation, we use bcrypt to hash the passwords before storing them, and use bcrypt to verify that the hashes match.
If the username and password match one of the existing accounts, the request is forwarded to the backend. Otherwise, the reverse proxy sends a 401 Unauthorized response.

The purpose of storing hashed passwords instead of plaintext passwords is to protect the plaintext password whilst still being able to compare them in the reverse proxy. If the hashed passwords were to leak, it would be impossible for the original password to be reversed from the hashed password, but the reverse proxy is still able to check if a password matches by hashing a given password and comparing them.

### Load Balancing

We implemented load balancing to redirect traffic to the servers with the lowest current usage. We created a list for the current usage relative to the strength of the server, allowing for a comparison to correctly send the request to the correct server. The load balancing method increments the usage when a request is being processed, and decrements when it closes. Load balancing can overall help improve user experience by distributing the load across servers, allowing for a faster experience. Load balancing can also help defend against DoS/DDos attacks by distributing each request across the server, reducing the impact caused by a significant amount of requests.

### Rate Limiting
We implemented hard rate limiting to limit network traffic. We created a rate map to store new ip keys each second. If that ip key has up to 10 requests within one second, the rest of the requests in that second will be denied and an error will be logged. The rate map is reset every second, but the time interval and the rate limit can be changed. Rate limiting is important to reduce strain on the web server. Hard rate limiting is when you reject all requests above the limit, whereas soft rate limiting is where you allow more requests than the limit for an extra (usually short) period of time. Rate limiting can help to defend against bot attacks such as DoS/DDoS, brute force attacks, and web scraping, but it is not a infallible solution.
