class Maths {
  constructor(a = 0) {
    this.value = this.parse(a)
  }
  parse(val) {
    const flag = val.toString().includes(".")
    if (flag) {
      return val.toString().split(".")
    } else {
      return [val.toString(), '0']
    }
  }
    toNumber () {
        const target = this.value.join('');
        console.log(target)
    return Number(target)
  }
  div(val) {
    const a = this.parse(val)
    console.log(a)
    const int = this.mathInt(this.value[0], a[0], "div")
    const dot = this.mathDot(this.value[1], a[1], "div")
    console.log(int)
      this.value = [int, dot]
      console.log(this.value)
    return this
  }
  
  mathInt(arg1, arg2, type) {
    const a = Number(arg1)
    let b = Number(arg2)
    if (type === "div") {
      if (b === 0) {
        return a
      } else {
          console.log(a/b)
        return a / b
      }
    }
  }
    mathDot (arg1, arg2, type) {
        const len1 = arg1.length
        const len2 = arg2.length
      const len =  len1 > len2 ? len1 : len2
      const a = Number(arg1) * len
      let b = Number(arg2) * len
      if (type === "div") {
        if (b === 0) {
          return a
        } else {
          return a / b
        }
      }
  }
  toValue() {
    return this.value
  }
  toString() {
    return this.value
  }
}

