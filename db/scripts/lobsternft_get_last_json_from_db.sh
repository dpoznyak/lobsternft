#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

LAST=$(cat $SQL_DIR/lobster_db_select_last.sql | sqlite3 $DB_DIR/lobster.db)
echo "LAST: $LAST"