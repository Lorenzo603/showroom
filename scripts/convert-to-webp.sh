#!/bin/bash

SCRIPTS_DIR=$( dirname -- "$0"; )
echo "Scripts Dir:" $SCRIPTS_DIR

echo "Converting image to .webp format..."

source_image=public/img/projects/japanese-reviews/japanese-reviews-intro-original-2.png
target_image=public/img/projects/japanese-reviews/japanese-reviews-intro-original-2.webp

cwebp -q 80 $SCRIPTS_DIR/../$source_image -o $SCRIPTS_DIR/../$target_image

echo "Done!"