if ! command -v cwebp &> /dev/null; then
    echo "cwebp is not installed." >&2
    exit 1
fi

for file in "../../public/images/members"/{.jpg,png}; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        extension="${filename##*.}"
        filename="${filename%.*}"
        out="../../public/images/members/$filename.webp"

        cwebp -q 80 "$file" -o "$output_file"
    fi
done

sed 's/(jpg)|(png)/webp/g' "../members.ts" >"../members.ts"

