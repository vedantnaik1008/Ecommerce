export const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'; // Add ellipsis if text is too long
    }
    return text;
};
