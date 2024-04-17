#!/bin/bash

# Check if a directory is provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 directory"
  exit 1
fi

# Check if the provided argument is a directory
if [ ! -d "$1" ]; then
  echo "Error: '$1' is not a directory"
  exit 1
fi

# Generate the JavaScript constant array
echo "const photos: string[] = ["

for file in "$1"/*; do
  if [ -f "$file" ]; then
    echo "  '$(basename "$file")',"
  fi
done

echo "]"
