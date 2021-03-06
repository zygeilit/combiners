#!/usr/bin/env bash
cd "$(dirname "${BASH_SOURCE[0]}")"

if [ -f "out/root.crt" ]; then
    echo Root certificate already exists.
    exit 1
fi

if [ ! -d "out" ]; then
    bash clear.sh
fi

openssl req -config ca.cnf \
    -newkey rsa:2048 -nodes -keyout out/root.key.pem \
    -new -x509 -days 7300 -out out/root.crt \
    -subj "/C=CN/ST=BeiJing/L=BeiJing/O=Develop_Server/CN=Develop_Server_ROOT_CA"

openssl genrsa -out "out/cert.key.pem" 2048
