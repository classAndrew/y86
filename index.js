function execute(code) {

}

/*
    Return assembled assembly as a sequence of integers
    requires textarea.value
*/
function assemble(asm_text) {
    let lines = asm_text.split("\n")
    lines.forEach((line) => {
        let [opcode, operands] = line.split(" ")
        console.log(opcode)
    })
}