convert rose:[10x10+0+0] -depth 8 txt: | tail -n +2 | sed -n "s/^\(.*\):.*\(#.*\) .*$/\1 \2/p";

for color in $(convert -list color | tail -n +6 | sed -r 's/.*\s([a-z]+\(.*)\).*/\1/'); do convert xc:"$color" -depth 8 txt: | grep -v -E '^#.*' | sed -r 's/^.*(#[0-9A-F]{6}).*/\1/' ; done