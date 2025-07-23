#!/bin/bash

echo "Fixing unused Card imports..."

# Files to process - using find to get all TypeScript files
find src -name "*.tsx" -o -name "*.ts" | while read file; do
    if [ -f "$file" ]; then
        # Check if the file has unused CardFooter import
        if grep -q "CardFooter" "$file" && ! grep -q "<CardFooter" "$file" && ! grep -q "CardFooter\." "$file"; then
            echo "Removing unused CardFooter from $file"
            # Remove CardFooter from import but keep other imports
            sed -i '' 's/, CardFooter//g' "$file"
            sed -i '' 's/CardFooter, //g' "$file"
            sed -i '' 's/{ CardFooter }/{ }/g' "$file"
            # Clean up empty imports
            sed -i '' '/import { } from/d' "$file"
        fi
        
        # Check if the file has unused CardDescription import
        if grep -q "CardDescription" "$file" && ! grep -q "<CardDescription" "$file" && ! grep -q "CardDescription\." "$file"; then
            echo "Removing unused CardDescription from $file"
            # Remove CardDescription from import but keep other imports
            sed -i '' 's/, CardDescription//g' "$file"
            sed -i '' 's/CardDescription, //g' "$file"
            sed -i '' 's/{ CardDescription }/{ }/g' "$file"
            # Clean up empty imports
            sed -i '' '/import { } from/d' "$file"
        fi
    fi
done

echo "Finished fixing Card imports"