#!/bin/bash

echo "Fixing strict boolean expressions..."

# Function to fix common boolean expression patterns
fix_boolean_patterns() {
    local file="$1"
    
    # Create backup
    cp "$file" "$file.bak"
    
    # Fix common patterns:
    # if (error) -> if (error != null)
    # if (value) -> if (value != null)
    # {condition && <Component>} -> {(condition != null) && <Component>}
    # But be careful not to break existing correct patterns
    
    # Pattern 1: if (variableName) where it should be if (variableName != null)
    sed -i '' 's/if (\([a-zA-Z_][a-zA-Z0-9_]*\))/if (\1 != null)/g' "$file"
    
    # Pattern 2: {variable && (react component patterns)}
    sed -i '' 's/{\([a-zA-Z_][a-zA-Z0-9_]*\) && \(<[A-Z]\)/{\1 != null \&\& \2/g' "$file"
    
    # Pattern 3: variable ? (ternary) - only fix simple cases
    sed -i '' 's/\([a-zA-Z_][a-zA-Z0-9_]*\) ? \([^:]*\) : \([^}]*\)/(\1 != null) ? \2 : \3/g' "$file"
    
    # Check if changes were actually made
    if diff -q "$file" "$file.bak" >/dev/null; then
        # No changes, restore original
        mv "$file.bak" "$file"
        return 1
    else
        rm "$file.bak"
        echo "Fixed boolean expressions in $file"
        return 0
    fi
}

# Get files with boolean expression errors
npm run lint 2>&1 | grep "strict-boolean-expressions" | grep -o "src/[^:]*" | sort -u | head -10 | while read file; do
    if [ -f "$file" ]; then
        fix_boolean_patterns "$file"
    fi
done

echo "Finished fixing boolean expressions"