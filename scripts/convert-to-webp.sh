#!/bin/bash

SCRIPTS_DIR=$( dirname -- "$0"; )
echo "Scripts Dir:" $SCRIPTS_DIR

echo "Converting image to .webp format..."

source_image=public/img/projects/feverail/feverail-gameplay-4.png
target_image=public/img/projects/feverail/feverail-gameplay-4.webp

# MacOs:
#cwebp -q 80 $SCRIPTS_DIR/../$source_image -o $SCRIPTS_DIR/../$target_image

# Windows:
magick $SCRIPTS_DIR/../$source_image $SCRIPTS_DIR/../$target_image


echo "Done!"