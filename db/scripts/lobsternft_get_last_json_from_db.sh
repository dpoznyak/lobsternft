#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

LAST=$(cat $SQL_DIR/lobster_db_select_last.sql | sqlite3 $DB_DIR/lobster.db)

ID=$(awk -F"¦" '{print $1}')
TIME=$(awk -F"¦" '{print $2}')
LOBSTER_COUNTER=$(awk -F"¦" '{print $3}')
LOBSTER_VOTES=$(awk -F"¦" '{print $4}')

$(cat <<-END > ./tmp.json
{
    "id": "${ID}", 
    "time": "${TIME}", 
    "lobster_counter": ${LOBSTER_COUNTER},
    "lobster_votes": ${LOBSTER_VOTES}
}
END
)

echo ./tmp/json
# rm -f ./tmp/json
echo "LAST: $LAST"