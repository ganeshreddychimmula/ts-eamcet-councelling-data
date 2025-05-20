export default function getUniqueValues(data, key) {
    const unique = [...new Set(data.map(item => item[key]).filter(Boolean))];
    return unique.sort((a, b) => String(a).localeCompare(String(b)));
}