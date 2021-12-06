#!/bin/bash

source_dir=$1
destination_dir=$2

for file in "${source_dir}"/*;do
    convert -resize 50% "$file" "$file"
done