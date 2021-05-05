import { useState } from 'react';

const Form = ({ author = '', rate = 0, comment = '', id, callback}) => {
    const [ authorInput, setAuthorInput] = useState('');
    const [ rateInput, setRateInput] = useState(0);
    const [ commentInput, setCommentInput] = useState('');

    const handleChangeAuthor = e => setAuthorInput(e.target.value)

    const handleChangeRate = e => setRateInput(e.target.value)

    const handleChangeComment = e => setCommentInput(e.target.value)

    const handleOnSubmit = e => {
        e.preventDefault();

        const rateObject = {
            author: authorInput,
            rate: Number(rateInput),
            comment: commentInput,
            id,
        }

        id ? console.log('Edytuj komentarz') : console.log('Dodaj komentarz')

        if(id) {
            callback();
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <p>
                <label htmlFor="author">
                    Autor
                    <input
                        type="text"
                        id="author"
                        value={authorInput}
                        onChange={handleChangeAuthor}
                    />
                </label>
            </p>
            <p>
                <label htmlFor="grade">
                    Ocena
                    <input
                        type="number"
                        id="grade"
                        value={rateInput}
                        onChange={handleChangeRate}
                    />
                </label>
            </p>
            <p>
                <label htmlFor="comment">
                    Komentarz
                    <input
                        type="text"
                        id="comment"
                        value={commentInput}
                        onChange={handleChangeComment}
                    />
                </label>
            </p>
            <button type="submit">{id ? 'Edytuj' : 'Dodaj'}</button>
        </form>
    )
}

export default Form;