#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

RAW=$($SPOT_PATH/scripts/query_payment_addr.sh addr1w8433zk2shufk42hn4x7zznjjuqwwyfmxffcjszw5l2ulesdt3jff | grep cc7888851f0f5aa64c136e0c8fb251e9702f3f6c9efcf3a60a54f419)
LOBSTER_COUNTER=$(echo $RAW | awk '{ print $9 }')
LOBSTER_VOTES=$(echo $RAW | awk '{ print $12 }')

echo "RAW: $RAW"
echo "LOBSTER_COUNTER: $LOBSTER_COUNTER"
echo "LOBSTER_VOTES: $LOBSTER_VOTES"