export function formatDate(date) {
    return date.toLocaleDateString("en-us", {
        day:"numeric",
        month:"short",
        year:"numeric",
    })
}