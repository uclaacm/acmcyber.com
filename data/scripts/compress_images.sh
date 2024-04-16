if ! command -v cwebp &> /dev/null; then
    echo "cwebp is not installed." >&2
    exit 1
fi

for file in "../../public/images/members"/*.{jpg,png}; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        extension="${filename##*.}"
        filename_no_ext="${filename%.*}"
        out="../../public/images/members/$filename_no_ext.webp"

        cwebp -q 80 "$file" -o "$out"
        rm "$file"
        echo "done"
        echo "$filename"
    fi
done

sed -i 's/\(jpg\|png\)/webp/g' ../members.ts

