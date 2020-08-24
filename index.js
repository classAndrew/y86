const opcodes = {
    halt: [0x00],
    nop: [0x10],
    rrmovq: [0x20, 0xFF], // rA and rB replaces 0xFF
    cmovle: [0x21, 0xFF],
    cmovl: [0x22, 0xFF],
    cmove: [0x23, 0xFF],
    cmovne: [0x24, 0xFF],
    cmovge: [0x25, 0xFF],
    cmovg: [0x26, 0xFF],
    irmovq: [0x30, 0xFF, 0x0000000000000000], // second 4-bits F replaced with destination, 8 bytes as value
    rmmovq: [0x40, 0xFF, 0x0000000000000000], // rA and rB  V(rB) offset
    mrmovq: [0x50, 0xFF, 0x0000000000000000], // rA and rB V(rB) offset move into rA
    addq: [0x60, 0xFF], // rA and rB
    subq: [0x61, 0xFF],
    andq: [0x62, 0xFF],
    xorq: [0x62, 0xFF],
    jmp: [0x70, 0x0000000000000000], // Address, 8 bytes. 10th byte not used
    jle: [0x71, 0x0000000000000000],
    jl: [0x72, 0x0000000000000000],
    je: [0x74, 0x0000000000000000],
    jne: [0x75, 0x0000000000000000],
    jge: [0x76, 0x0000000000000000],
    jg: [0x77, 0x0000000000000000],
    call: [0x80, 0x0000000000000000], // 8 byte dest, 10th byte unused
    ret: [0x90],
    pushq: [0xA0, 0x0F], // push rA onto stack first 4 bis
    popq: [0xB0, 0x0F]
}

class RegisterFile {
    constructor() {
        this.registers = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                0xA: 0,
                0xB: 0,
                0xC: 0,
                0xD: 0,
                0xE: 0
            }
            // 0xF no register
        this.registerNames = {
            "rax": 0,
            "rcx": 1,
            "rdx": 2,
            "rbx": 3,
            "rsp": 4,
            "rbp": 5,
            "rsi": 6,
            "rdi": 7,
            "r8": 8,
            "r9": 9,
            "r10": 10,
            "r11": 11,
            "r12": 12,
            "r13": 13,
            "r14": 14
        }

    }
}

class CPU {

    constructor(memsize) {
        Object.assign(this, { memsize })
        this.RF = new RegisterFile()
        this.CF = this.SF = this.ZF = this.stat, this.PC = 0
    }

    execute(code) {

    }

}

/*
    Return assembled assembly as a sequence of integers
    requires textarea.value
*/

function assemble(asm_text) {
    let lines = asm_text.split("\n")
    let binary = lines.map((line) => {
        let lineSplit = line.split(" ")
        console.log(lineSplit)
    })
}

const cpu = new CPU(1024);
const registerList = document.querySelector("#reglist")
Object.keys(cpu.RF.registerNames).forEach((register) => {
    let elm = document.createElement("li");
    elm.innerText = register + ": " + "0x0000000000000000"
    registerList.appendChild(elm)
})