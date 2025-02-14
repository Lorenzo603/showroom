#!/bin/bash

SCRIPTS_DIR=$( dirname -- "$0"; )
echo "Scripts Dir:" $SCRIPTS_DIR

echo "Converting image to .webp format..."

source_image=public/img/certifications/aws-ai-practitioner-badge.png
target_image=public/img/certifications/aws-ai-practitioner-badge.webp

# MacOs - convert to WEBP:
cwebp -q 80 $SCRIPTS_DIR/../$source_image -o $SCRIPTS_DIR/../$target_image

# Windows - convert to WEBP:
# magick $SCRIPTS_DIR/../$source_image $SCRIPTS_DIR/../$target_image

# Resize image
# magick $SCRIPTS_DIR/../public/img/certifications/aws-ai-early-adopter.png -resize 300x300 $SCRIPTS_DIR/../public/img/certifications/aws-ai-early-adopter-1.png

echo "Done!"