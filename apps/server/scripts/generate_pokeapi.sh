#!/bin/bash

ENV_FILE=.env.development

#load environment variables from .env.development
set -o allexport
source $ENV_FILE
set +o allexport

API_NAME=pokeapiClient
INPUT=openapi/pokeapi.yaml
OUTPUT_DIR=src/generated/pokeapi
OUTPUT_FILE=pokeapi.client
OUTPUT_FILE_WITH_EXTENSION="$OUTPUT_FILE.ts"

#create pokeapi dir
mkdir -p $OUTPUT_DIR

# IMPORTANT - Using POKEAPI_URL_WITHOUT_VERSION, because client generateor includes version for every endpoint

# Check if POKEAPI_URL_WITHOUT_VERSION is defined
if [ -z "${POKEAPI_URL_WITHOUT_VERSION}" ]; then
  echo "POKEAPI_URL_WITHOUT_VERSION is not defined in $ENV_FILE."
  exit 1 
fi

pnpm openapi-zod-client $INPUT -o $OUTPUT_DIR/$OUTPUT_FILE_WITH_EXTENSION --base-url $POKEAPI_URL_WITHOUT_VERSION --api-client-name $API_NAME --export-types

echo "export { pokeapiClient, schemas as pokeapiSchemas } from \"./$OUTPUT_FILE\"" > "$OUTPUT_DIR/index.ts"