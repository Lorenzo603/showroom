#!/bin/bash

SCRIPTS_DIR=$( dirname -- "$0"; )
echo "Scripts Dir:" $SCRIPTS_DIR

echo "Converting image to .webp format..."

source_image=public/img/certifications/aws-well-architected-proficient-badge.png
target_image=public/img/certifications/aws-well-architected-proficient-badge.webp

# Resize image Windows/MacOs
magick $SCRIPTS_DIR/../$source_image -resize 300x300 $SCRIPTS_DIR/../$source_image

# MacOs - convert to WEBP:
cwebp -q 80 $SCRIPTS_DIR/../$source_image -o $SCRIPTS_DIR/../$target_image

# # Windows - convert to WEBP:
# magick $SCRIPTS_DIR/../$source_image $SCRIPTS_DIR/../$target_image

echo "Done!"