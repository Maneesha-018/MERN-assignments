
const jsonData = `{
    "catalogue": {
        "storeName": "My Product Store",
        "products": [
            {
                "id": 101,
                "name": "Laptop",
                "price": 55000
            },
            {
                "id": 102,
                "name": "Mobile",
                "price": 25000
            }
        ]
    }
}`;

try {
    const data = JSON.parse(jsonData);

    console.log("JSON is valid!");

    console.log("Store Name:", data.catalogue.storeName);
    console.log("Products:", data.catalogue.products);

} catch (error) {
    console.log("Invalid JSON:", error.message);
}
