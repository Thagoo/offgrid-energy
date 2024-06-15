#!/bin/bash

# Function to convert PNG to WebP with improved quality
convert_png_to_webp() {
    for file in "$1"/*.png; do
        if [ -f "$file" ]; then
            # Generate the output WebP filename
            webp_file="${file%.png}.webp"

            # Convert the PNG to WebP with improved quality (e.g., quality set to 90)
            cwebp -q 100 "$file" -o "$webp_file"
        fi
    done

    for dir in "$1"/*/; do
        if [ -d "$dir" ]; then
            convert_png_to_webp "$dir"
        fi
    done
}

# Check if directory is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Start converting from the provided directory
convert_png_to_webp "$1"

echo "PNG to WebP conversion complete."
