#!/usr/bin/fish

for file in (ls *.less)
    echo_progress "Building "
    echo_highlight "$file"
    echo_progress "..."
    set base (basename $file .less)
    lessc "$base.less" "$base.css" --source-map="$base.css.map"
    echo
end
