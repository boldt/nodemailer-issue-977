# Info

Apline-based container contain `sendmail`, thus this example uses `node:11.6-alpine`.

# Clone

```
git clone git@github.com:boldt/nodemailer-issue-977.git
cd nodemailer-issue-977
```

# Add mail address

Add you mail address in from/to in `mail.js`

# Build and run

```
docker build -t boldt/nodemailer-test .
docker run --net="host" --rm boldt/nodemailer-test
```

# Error

The following error is thrown:

```
Error: { Error: write EPIPE
    at WriteWrap.onWriteComplete [as oncomplete] (internal/stream_base_commons.js:66:16) errno: 'EPIPE', code: 'EPIPE', syscall: 'write' }
```
