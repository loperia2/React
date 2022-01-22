import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import Book from './Components/Book'
import { BOOKS }  from './books'


const BookList = () => {
  const list = BOOKS.map((book, index) => {
    return <Book key={book.title} {...book}/>
  })
  return (
    <section className="bookList">
      {list}
    </section>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'))