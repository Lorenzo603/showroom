#!/bin/bash

SCRIPTS_DIR=$( dirname -- "$0"; )
echo "Scripts Dir:" $SCRIPTS_DIR

echo "Converting image to .webp format..."

source_image=public/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-intro.png
target_image=public/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-intro.webp

cwebp -q 80 $SCRIPTS_DIR/../$source_image -o $SCRIPTS_DIR/../$target_image

echo "Done!"