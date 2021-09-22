#!/bin/bash

NOW=`date +"%Y%m%d %H:%M:%S"`
SCRIPT_DIR="$(realpath "$(dirname "$0")")"

echo
echo '---------------- Getting our app set up as a systemd service ----------------'

cat > $SCRIPT_DIR/run.lobsternft.service << EOF
[Unit]
Description=Lobster NFT App Run Script
Wants=network-online.target
After=multi-user.target

[Service]
User=$USER
Type=simple
WorkingDirectory=$SCRIPT_DIR
Restart=always
RestartSec=5
LimitNOFILE=131072
ExecStart=/bin/bash -c '$SCRIPT_DIR/run.lobsternft.sh'
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=2
SuccessExitStatus=143
SyslogIdentifier=run.relay

[Install]
WantedBy=multi-user.target
EOF

sudo mv $SCRIPT_DIR/run.lobsternft.service /etc/systemd/system/run.lobsternft.service
sudo systemctl daemon-reload
sudo systemctl enable run.lobsternft

echo
echo '---------------- Setup completed ----------------'

sudo systemctl status run.lobsternft --no-pager
