for file in "../../public/images/members"/*.{jpg,png}; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        extension="${filename##*.}"
        filename_no_ext="${filename%.*}"
        out="../../public/images/members/$filename_no_ext.webp"

        convert "$file" -resize 400x400 "$out"
        if [ "$extension" != "webp" ]; then
            rm "$file"
        fi
        echo "done"
        echo "$filename"
    fi
done

sed -i 's/\(jpg\|png\)/webp/g' ../members.ts

