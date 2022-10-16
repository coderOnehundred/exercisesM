let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Glorin', 'Thorin', 'Balin', 'Swalin', 'Nori', 'Dori'];

dwarves.forEach((item, index, array) => {
    if (item === 'Thorin') {
        item = item.toUpperCase();
    } else {
        item = item.toLowerCase();
    }
    console.log(index, item);

});

