let output = ''
for(let k = 100; k > 0; k--) {
    output += '${list'
    for(let i = 0; i < k; i++) {
        output += '.next?'
    }
    output += '.val},'
}

output += '${list.val}'

await Deno.writeTextFile('./please_no.txt', output)