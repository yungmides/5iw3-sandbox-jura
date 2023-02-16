#!/bin/sh
set -e
		
if [ "$( find ./src/migrations -iname '*.ts' -print -quit )" ]; then
    echo "Executing migrations..."
    npm run mikro-orm migration:up
else 
    echo "No migrations found"
fi

echo "Starting app in $APP_ENV mode..."

npm run start:$APP_ENV

exec "$@"