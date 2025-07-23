#!/bin/bash

echo "Fixing template literal issues in StrategyOverview.tsx..."

file="src/pages/strategy/StrategyOverview.tsx"

if [ -f "$file" ]; then
    # Create backup
    cp "$file" "$file.bak"
    
    # Fix specific patterns that cause template literal errors:
    
    # 1. Fix businessMetrics object properties that are numbers
    sed -i '' 's/\${businessMetrics\.\([^}]*\)}/\${String(businessMetrics.\1)}/g' "$file"
    
    # 2. Fix getFormattedDealSize calls that might return numbers
    sed -i '' 's/\${getFormattedDealSize(\([^)]*\))}/\${String(getFormattedDealSize(\1))}/g' "$file"
    
    # 3. Fix direct number properties
    sed -i '' 's/\${year\.\([a-zA-Z]*\)}/\${String(year.\1)}/g' "$file"
    
    # 4. Fix marketOpportunity properties  
    sed -i '' 's/\${marketOpportunity\.\([^}]*\)}/\${String(marketOpportunity.\1)}/g' "$file"
    
    # Check if changes were made
    if diff -q "$file" "$file.bak" >/dev/null; then
        echo "No changes needed in $file"
        mv "$file.bak" "$file"
    else
        echo "Fixed template literals in $file"
        rm "$file.bak"
    fi
else
    echo "File $file not found"
fi

echo "Finished fixing template literals"