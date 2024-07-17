#!/bin/bash

BASE_URL=https://pokeapi.co
API_NAME=pokeapiClient
INPUT=openapi/pokeapi.yaml
OUTPUT_DIR=src/generated/pokeapi
OUTPUT_FILE=pokeapi.client.ts

#create pokeapi dir
mkdir -p $OUTPUT_DIR

pnpm openapi-zod-client openapi/pokeapi.yaml -o $OUTPUT_DIR/$OUTPUT_FILE --base-url $BASE_URL --api-client-name $API_NAME --export-types

echo "export { pokeapiClient, schemas as pokeapiSchemas } from \"./pokeapi.client\"" > "$OUTPUT_DIR/index.ts"