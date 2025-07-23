#!/bin/bash

echo "Fixing template literal expression errors..."

# Find files with template literal errors
npm run lint 2>&1 | grep "Invalid type.*of template literal expression" | cut -d: -f1 | sort -u | while read file; do
    if [ -f "$file" ]; then
        echo "Processing $file"
        
        # Common patterns to fix:
        # 1. ${number} -> ${String(number)}
        # 2. ${any} -> ${String(any)}
        # 3. ${variable} where variable could be number/any -> ${String(variable)}
        
        # Create a backup
        cp "$file" "$file.bak"
        
        # Use a more targeted approach - only fix specific patterns that are problematic
        # Look for template literals with variables that might be numbers
        sed -i '' 's/\${businessMetrics\.[^}]*\.totalTAM}/\${String(businessMetrics.marketSize.totalTAM)}/g' "$file"
        sed -i '' 's/\${businessMetrics\.[^}]*\.[0-9][^}]*}/\${String(&)}/g' "$file"
        
        # Check if file was actually changed
        if diff -q "$file" "$file.bak" >/dev/null; then
            # No changes, restore backup
            mv "$file.bak" "$file"
        else
            echo "Fixed template literals in $file"
            rm "$file.bak"
        fi
    fi
done

echo "Finished fixing template literal expressions"