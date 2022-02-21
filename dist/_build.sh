#!/bin/bash
# Maybe a Makefile would be better...

echo "Finding targets..."
targets=$(ls ../src/targets/*.less)
echo "Targets:"
echo "$targets"
echo

echo "Finding themes..."
themes=$(ls ../src/themes/*.less)
echo "Themes:"
echo "$themes"
echo

for target in $targets
do
for theme in $themes
do

btarget=$(basename $target .less)
btheme=$(basename $theme .less)
# Dot notation is used so .module.css files can be generated
base="$btheme.$btarget"

echo "Building $base with the following rules:"

tee "$base.less" << EOF
@import (less) "../src/utils/mixins.less";
@import (less) "$target";
@import (less) "$theme";
EOF

lessc "$base.less" "$base.css" --source-map="$base.css.map" 

echo

done
done

