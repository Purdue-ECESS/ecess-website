#!/bin/bash

for file in "src"/*;do
	ffmpeg -i "$file" -vf scale="1080:-1" "$file" -y
done
