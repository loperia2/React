import React from 'react'
import ReactDom from 'react-dom'
import './style.css'


const TITLE1 = 'Büyücünün İlk Kuralı-Kısım II Doğruluk Kılıcı Serisi 1'
const SRC1 = 'https://m.media-amazon.com/images/I/516DbnPIzCL._AC_UL320_.jpg'
const TITLE2 = 'Büyücünün İlk Kuralı-Kısım I Doğruluk Kılıcı Serisi 1'
const SRC2 = 'https://m.media-amazon.com/images/I/51KYdLatTPL._AC_UL320_.jpg'

const BookList = () => {
  return (
    <section className="bookList">
      <Book title={TITLE1} src={SRC1}/>
      <Book title={TITLE2} src={SRC2}/>
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <Image src={props.src}/>
      <Title title={props.title}/>
    </article>
  )
}

const Image = (props) => {
  return( 
    <img src={props.src}/>
  )
}

const Title = (props) =>  {
  return <h1>{props.title}</h1>
}


ReactDom.render(<BookList/>, document.getElementById('root'))