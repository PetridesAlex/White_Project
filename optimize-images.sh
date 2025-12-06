#!/bin/bash

# Image Optimization Script for White Tiger Website
# This script helps optimize images in src/assets/images/

IMAGE_DIR="src/assets/images"
BACKUP_DIR="src/assets/images/backup_original"

echo "🔍 Image Optimization Tool"
echo "=========================="
echo ""

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Check if sips is available
if ! command -v sips &> /dev/null; then
    echo "❌ Error: sips command not found. This script requires macOS."
    exit 1
fi

echo "📊 Current Image Sizes:"
echo "----------------------"
total_size=0

for img in "$IMAGE_DIR"/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null; do
    if [ -f "$img" ]; then
        size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_mb=$(echo "scale=2; $size / 1048576" | bc)
        total_size=$(echo "$total_size + $size" | bc)
        filename=$(basename "$img")
        printf "  %-30s %8.2f MB\n" "$filename" "$size_mb"
    fi
done

total_mb=$(echo "scale=2; $total_size / 1048576" | bc)
echo ""
echo "📦 Total size: ${total_mb} MB"
echo ""

echo "⚠️  IMPORTANT:"
echo "=============="
echo "This script will create backups and optimize images."
echo ""
echo "For BEST results, use online tools:"
echo "  1. Go to https://tinypng.com/"
echo "  2. Upload all images from $IMAGE_DIR"
echo "  3. Download optimized versions"
echo "  4. Replace originals"
echo ""
echo "Or use this script for basic optimization (creates backups first)..."
echo ""
read -p "Continue with basic optimization? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled. Use TinyPNG for best results!"
    exit 0
fi

echo ""
echo "📦 Creating backups..."
for img in "$IMAGE_DIR"/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null; do
    if [ -f "$img" ] && [[ ! "$img" == *"backup"* ]]; then
        cp "$img" "$BACKUP_DIR/$(basename "$img")"
    fi
done
echo "✅ Backups created in $BACKUP_DIR"
echo ""

echo "🔄 Optimizing images (using macOS sips)..."
echo "-----------------------------------------"

optimized_count=0
for img in "$IMAGE_DIR"/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null; do
    if [ -f "$img" ] && [[ ! "$img" == *"backup"* ]]; then
        filename=$(basename "$img")
        echo "  Optimizing: $filename"
        
        # Use sips to optimize (macOS built-in)
        sips -s format jpeg -s formatOptions 85 "$img" --out "${img%.*}_optimized.jpg" 2>/dev/null || \
        sips -s formatOptions 85 "$img" --out "${img%.*}_optimized.${img##*.}" 2>/dev/null
        
        if [ -f "${img%.*}_optimized.${img##*.}" ] || [ -f "${img%.*}_optimized.jpg" ]; then
            optimized_count=$((optimized_count + 1))
        fi
    fi
done

echo ""
echo "✅ Basic optimization complete!"
echo ""
echo "📝 Next Steps:"
echo "=============="
echo "1. Check the optimized files (they have _optimized suffix)"
echo "2. Compare file sizes"
echo "3. Replace originals if satisfied"
echo "4. OR use TinyPNG for better compression (recommended)"
echo ""
echo "💡 For BEST results, use: https://tinypng.com/"

