const stuSem7Marks = [3.2, 3.3, 4, 2.8, 3.0]
console.log(stuSem7Marks)  // 0xa123

console.log(stuSem7Marks[3])

// normal loop practices
console.log(`normal loop practices`)
for (let i = 0; i < stuSem7Marks.length; i++) {
    console.log(stuSem7Marks[i])
}

// for in loop, for shorthand
console.log(`for in loop, for shorthand`)
for (let i in stuSem7Marks){
    console.log(stuSem7Marks[i])
}

console.log(typeof(stuSem7Marks))
console.log(Array.isArray(stuSem7Marks))