#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
SQL_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"

echo "SCRIPT_DIR: $SCRIPT_DIR"
echo "SQL_DIR: $SQL_DIR"

LAST=$(cat $SQL_DIR/lobster_db_select_last.sql | sqlite3 lobster.db)
echo "LAST: $LAST"