
import '../config/module-alias'
import { Person } from "@/application/controllers"

const p = new Person()
console.log(p.speak('David Sousa'))
console.log(p.speak())
