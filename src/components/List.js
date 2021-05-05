import Element from './Element';
import { useSelector } from 'react-redux';

const List = () => {

    const rates = useSelector(store => store)
    const ratesElements = rates.map(rate => (
    <Element key={rate.id} {...rate}/>
    ));

    return (
        <ul>
            {ratesElements}
        </ul>
    )
}

export default List;