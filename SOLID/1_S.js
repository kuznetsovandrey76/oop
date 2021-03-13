// Single Responsibility Principle

// Класс отвечающий за сообщением
class Message {
  constructor(subject, text) {
    this.subject = subject
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

// Класс отвечающий за отображение
class Printer {
  constructor(data) {
    this.data = data
  }

  html() {
    return `
      <div class="data">
        <h1>${this.data.subject}</h1>
        <p>${this.data.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify({
      subject: this.data.subject,
      text: this.data.text,
    }, null, 2)
  }

  xml() {
    return `
      <data>
        <subject>${this.data.subject}</subject>
        <text>${this.data.text}</text>
      </data>
  `
  }
}

// Класс отвечающий за сохранением
class SaveToFile {
  constructor(data) {
    this.data = data
  }

  pdf = () =>'Save to pdf.'
  word = () => 'Save to word.'
}

const msg = new Message('You are welcome', 'Hello World!');
const printer = new Printer(msg)
const file = new SaveToFile(msg)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())

console.log(file.pdf())
console.log(file.word())