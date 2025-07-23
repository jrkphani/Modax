#!/bin/bash

echo "Fixing floating promises..."

# Get files with floating promise errors
npm run lint 2>&1 | grep -B1 "no-floating-promises" | grep "\.tsx\?:" | cut -d: -f1 | sort -u | head -10 | while read file; do
    if [ -f "$file" ]; then
        echo "Processing floating promises in $file"
        
        # Create backup
        cp "$file" "$file.bak"
        
        # Common patterns to fix:
        # 1. navigate(...) -> void navigate(...)
        # 2. setSearchParams(...) -> void setSearchParams(...) 
        # 3. router.push(...) -> void router.push(...)
        # 4. Any function call that returns a promise at start of line
        
        # Pattern 1: navigate calls
        sed -i '' 's/^[[:space:]]*navigate(/void navigate(/g' "$file"
        
        # Pattern 2: setSearchParams calls
        sed -i '' 's/^[[:space:]]*setSearchParams(/void setSearchParams(/g' "$file"
        
        # Pattern 3: router.push calls
        sed -i '' 's/^[[:space:]]*router\.push(/void router.push(/g' "$file"
        
        # Pattern 4: Common promise-returning function calls
        sed -i '' 's/^[[:space:]]*fetch(/void fetch(/g' "$file"
        sed -i '' 's/^[[:space:]]*Promise\.resolve(/void Promise.resolve(/g' "$file"
        
        # Check if changes were made
        if diff -q "$file" "$file.bak" >/dev/null; then
            # No changes, restore original
            mv "$file.bak" "$file"
        else
            echo "Fixed floating promises in $file"
            rm "$file.bak"
        fi
    fi
done

echo "Finished fixing floating promises"