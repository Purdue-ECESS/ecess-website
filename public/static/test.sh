#!/bin/bash

source_dir=raw
destination_dir=src

for file in "${source_dir}"/*;do

    hash=$(md5sum "${file}"|cut -d' ' -f1)

    ext=${file##*.}

    cp -v "$file" "${destination_dir}/${hash}.${ext}"

done
