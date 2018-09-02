#!/usr/bin/env bash
cd "$(dirname "${BASH_SOURCE[0]}")"
rm -rf out
mkdir out
cd out
mkdir newcerts
touch database.txt
echo "unique_subject = no" > database.txt.attr
echo 1000 > serial
