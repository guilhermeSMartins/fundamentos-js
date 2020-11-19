var strin = 'Cod3r'

console.log(strin.charAt(4))
console.log(strin.charAt(5))
console.log(strin.charCodeAt(3)) //Codigo tabela unicode
console.log(strin.indexOf('3'))

console.log(strin.substring(1))
console.log(strin.substring(0, 3))

console.log('Escola '.concat(strin).concat("!"))
console.log('Escola ' + strin + "!")

console.log(strin.replace(3, 'e'))
console.log(strin.replace(/\d/, 'e'))

console.log('Ana,Maria,Pedro'.split(','))