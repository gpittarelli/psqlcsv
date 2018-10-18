# psqlcsv

Small alternative to the default `psql` CLI. Outputs proper CSV
without using the `COPY` command (for Amazon Redshift compatibility)

Connection details should be supplied in env vars:

```
$ PGUSER=dbuser \
  PGHOST=database.server.com \
  PGPASSWORD=secretpassword \
  PGDATABASE=mydb \
  PGPORT=3211 \
  psqlcsv 'SELECT id, json, messy_text FROM Data' > data.csv
```
