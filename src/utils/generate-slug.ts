export function generateSlug(text: String): string {
    return text
        .normalize("NFD")
        .replace(/[\u036f]/g, "")
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
}