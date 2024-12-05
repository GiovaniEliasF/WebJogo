 export const gridCelss = n => {
    return n * 24;
}

export const espacoLivre = (paredes, x, y) => {
    const str = `${x}, ${y}`;
    const isWallPresent = paredes.has(str);
    return !isWallPresent;
}