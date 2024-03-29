#!/bin/bash
# Maybe a Makefile would be better...

origin=$(pwd)
cd "dist"

echo "Cleaning dist:" *
rm -I *

echo "Finding mixins..."
mixins=$(ls ../src/mixins/**.less)
echo "Mixins:"
echo "$mixins"
echo

echo "Finding rulesets..."
rules=$(ls ../src/rulesets/*.less ../src/rulesets/**/*.less)
echo "Rules:"
echo "$rules"
echo

echo "Finding selectors..."
selectors=$(ls ../src/selectorsets/*.less ../src/selectorsets/**/*.less)
echo "Selectors:"
echo "$selectors"
echo

for selector in $selectors
do
for rule in $rules
do

bselector=$(basename "$selector" ".less")
brule=$(basename "$rule" ".less")
# Dot notation is used so .module.css files can be generated
base="$brule.$bselector"

echo "Creating $base.less..."

echo "// Mixins" > "$base.less"
for mixin in $mixins
do
echo "@import (less) \"$mixin\";" >> "$base.less"
done
echo >> "$base.less"

echo "// Selector" >> "$base.less"
echo "@import (less) \"$selector\";" >> "$base.less"
echo >> "$base.less"

echo "// Rule" >> "$base.less"
echo "@import (less) \"$rule\";" >> "$base.less"
echo >> "$base.less"

echo "Compiling $base.css..."
lessc "$base.less" "$base.css"
echo "Compiling $base.min.css..."
lessc "$base.less" --clean-css "$base.min.css"

done
done

cd "$origin"