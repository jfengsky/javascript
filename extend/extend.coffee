Person = (name, age) ->
  @name = name
  @age = age
  return

Books = (title, name, age) ->
  Person.call(this, name, age)
  @title = title
  return

p = new Person("jack", 18)

book = new Books("book title")

console.log(book)

# console.log(Person)

