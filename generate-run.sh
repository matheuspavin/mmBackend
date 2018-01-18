#!/bin/sh
cat > run.sh << 'EOF'
#export DATABASE_URL=postgres://localhost:5432/diary
#export ACADEMIC_DATABASE_USER='postgres'
#export ACADEMIC_DATABASE_DB='diary'
#export ACADEMIC_DATABASE_PW='root'
#export ACADEMIC_DATABASE_HOST='localhost'
#export ACADEMIC_DATABASE_PORT=5432
#export ACADEMIC_POOL_MAX=10
#export ACADEMIC_POOL_TIMEOUT=30000
#export ACADEMIC_RUNNING_MODE=dev
node server.js
EOF
chmod +x run.sh