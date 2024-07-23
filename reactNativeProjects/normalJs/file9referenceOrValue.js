const uolDepartments = [`cs`, `se`, `ai`, `soca`, `mbbs`]

const deptOfOtherUni = uolDepartments

deptOfOtherUni[3] = `ahs`

console.log(deptOfOtherUni) // ahs
console.log(uolDepartments)


let stu1Name = "sohaib"
let stu2Name = stu1Name
stu2Name = `hamza`
console.log(stu2Name)
console.log(stu1Name)