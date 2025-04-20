export default function makeCategoryTitle(title: string): string {
    return title.slice(0, 1).toUpperCase() + title.slice(1);
}