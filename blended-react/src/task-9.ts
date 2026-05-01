interface Container<T> {
items: T [];
addItem: (item: T) => void;
getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
    items: [1,2,3],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
};

const stringContainer: Container<string> = {
items: ["a", "b", "c"],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
},
};

stringContainer.addItem(8);
numberContainer.addItem("a");

stringContainer.addItem("a");
console.log(stringContainer.getItem(stringContainer.items.length -1));

function getLastElement<T>(container: Container<T>): T {
    return container.getItem(container.items.length -1);
    console.log(getLastElement(numberContainer));
}