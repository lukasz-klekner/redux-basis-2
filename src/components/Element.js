import { useState } from 'react';
import Form from './Form';

const Element = ({ author, rate, comment, id }) => {

    const [isVisibleForm, setIsVisibleForm] = useState(false);

    const toggleElements = () => setIsVisibleForm(prevState => !prevState)

    const formOrButtonElement = isVisibleForm
    ? (
        <Form
            author={author}
            rate={rate}
            comment={comment}
            id={id}
            callback={toggleElements}
         />
    ) : (
        <button onClick={toggleElements}>
            Edytuj
        </button>
    )


    return (
        <li>
            <p>Autor oceny: {author}</p>
            <p>Ocena: {rate}</p>
            <p>Komentarz: {comment}</p>
            {formOrButtonElement}
        </li>
    )
}

export default Element;