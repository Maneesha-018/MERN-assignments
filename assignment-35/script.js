
function showRelationships() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const content = document.getElementById("content");

    let output = "";

    // Parent relationship
    output += "<h3>Parent Relationship</h3>";
    output += "First Paragraph Parent: " + first.parentElement.id;

    // Child relationship
    output += "<h3>Child Relationship</h3>";
    output += "Content Children: " + content.children.length;

    // Sibling relationship
    output += "<h3>Sibling Relationship</h3>";
    output += "Previous Element: " + second.previousElementSibling.id + "<br>";
    output += "Next Element: " + second.nextElementSibling.id;

    // Parent's parent
    output += "<h3>Ancestor Relationship</h3>";
    output += "Grandparent: " + content.parentElement.id;

    document.getElementById("result").innerHTML = output;
}
