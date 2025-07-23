#!/bin/bash

echo "Systematically fixing remaining lint errors..."

# Get current error count
echo "Current error count:"
npm run lint 2>&1 | grep -E "[0-9]+ problems" | tail -1

# Phase 1: Fix most common template literal errors
echo "Phase 1: Fixing template literal errors in specific files..."

# Fix template literals in files with the most errors
for file in "src/pages/strategy/StrategyOverview.tsx" "src/pages/Landing.tsx" "src/components/examples/data-table-advanced-demo.tsx"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        cp "$file" "$file.bak"
        
        # Replace specific patterns we know are problematic
        sed -i '' 's/\${year\.entries}/\${String(year.entries)}/g' "$file"
        sed -i '' 's/\${year\.expansions}/\${String(year.expansions)}/g' "$file"
        sed -i '' 's/\${year\.transformations}/\${String(year.transformations)}/g' "$file"
        sed -i '' 's/\${year\.entriesRevenue}/\${String(year.entriesRevenue)}/g' "$file"
        sed -i '' 's/\${year\.expansionsRevenue}/\${String(year.expansionsRevenue)}/g' "$file"
        sed -i '' 's/\${year\.transformationsRevenue}/\${String(year.transformationsRevenue)}/g' "$file"
        
        # Check if any changes were made
        if diff -q "$file" "$file.bak" >/dev/null; then
            mv "$file.bak" "$file"
        else
            echo "Fixed template literals in $file"
            rm "$file.bak"
        fi
    fi
done

echo "Phase 1 complete. Checking error count..."
npm run lint 2>&1 | grep -E "[0-9]+ problems" | tail -1

echo "Finished systematic error fixing"