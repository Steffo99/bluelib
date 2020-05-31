export default function(input) {
    let indent_regex = /^[ \t]+/;

    let lines = input.split("\n").filter((line) => {
        return line !== "";
    });
    let match = null;

    for(let i = 0; i < lines.length; i++) {
        match = indent_regex.exec(lines[i]);
        if(match !== null) break;
    }

    let start;
    if(match === null) {
        start = 0;
    }
    else {
        start = match[0].length;
    }

    return lines.map((line) => {
        return line.substr(start);
    }).join("\n");
}
